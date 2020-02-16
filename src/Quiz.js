import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTimes, FaCheck } from "react-icons/fa";

import {
  shuffle,
  calculateChoices,
  calculateCorrectAnswerTotal
} from "./logic";
import words from "./questions.json"; // @Cleanup - bad name
import History from "./History";
import { colours, screenBreakpoints } from "./theme";
import Button from "./Button";

const ResultsContainer = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  color: ${colours.tertiary};

  @media (max-width: ${screenBreakpoints.tablet}px) {
    margin-bottom: 2rem;
  }
`;

const QuestionWord = styled.div`
  color: ${colours.primary};
  // margin-bottom: 10rem;
  font-size: 7rem;
  // set lineheight because the set default between english and hindi is different @Cleanup
  line-height: 8rem;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    margin-bottom: 2rem;
    font-size: 6rem;
    // set lineheight because the set default between english and hindi is different @Cleanup
    line-height: 6rem;
  }

  @media (max-width: ${screenBreakpoints.small}px) {
    margin-bottom: 2rem;
    font-size: 5rem;
    // set lineheight because the set default between english and hindi is different @Cleanup
    line-height: 5rem;
  }
`;

const Choice = styled.div`
  font-size: 3rem;
  line-height: 3rem;
  cursor: pointer;
  padding: 0 1rem;
  width: 22%;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const ChoicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: ${colours.tertiary};

  @media (max-width: ${screenBreakpoints.tablet}px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

// @Cleanup - strings in the function should be constants
// @Cleanup - put in logic file
function calculateRandomRoundType() {
  const int = Math.floor(Math.random() * 2); // generates int between 0 and 5

  let roundType;
  if (int === 0) {
    roundType = ["hindi", "english"];
  } else if (int === 1) {
    roundType = ["english", "hindi"];
  }
  // else if (int === 2) {
  //   roundType = ["english", "englishPronunciation"];
  // } else if (int === 3) {
  //   roundType = ["englishPronunciation", "english"];
  // }
  // else if (int === 4) {
  //   roundType = ["hindi", "englishPronunciation"];
  // } else if (int === 5) {
  //   roundType = ["englishPronunciation", "hindi"];
  // }

  return roundType;
}

function Quiz({ config, setHasStarted }) {
  const [history, setHistory] = useState([]);
  const [roundType, setRoundType] = useState(calculateRandomRoundType());
  const [questions, setQuestions] = useState(
    shuffle([...words]).slice(0, config.roundCount)
  );
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [displayHistory, setDisplayHistory] = useState(false);

  const currentQuestion = questions[questions.length - 1];
  const [choices, setChoices] = useState(
    calculateChoices(currentQuestion, words, config.choiceCount)
  );

  const handleConfirmAnswer = () => () => {
    setHistory([
      ...history,
      {
        questionType: "WORD", // @Cleanup - ???
        question: currentQuestion,
        choices,
        answer: selectedAnswer,
        type: roundType
        // @Incomplete - whether the question was asked in english or hindi or english pronunciation
      }
    ]);

    setSelectedAnswer(null);
    const newQuestions = questions.filter((_, i) => i !== questions.length - 1); // @Cleanup - probably a better way to do that
    setQuestions(newQuestions);
    setChoices(
      calculateChoices(
        newQuestions[newQuestions.length - 1],
        words,
        config.choiceCount
      )
    );

    setRoundType(calculateRandomRoundType());
  };

  useEffect(() => {
    const keyPressHandler = ({ key }) =>
      key === "Enter" && selectedAnswer !== null && handleConfirmAnswer()();
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };

    // @Cleanup - https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnswer]);

  const correctAnswerTotal = calculateCorrectAnswerTotal(history);

  if (displayHistory) {
    return (
      <History
        history={history}
        handleExitHistory={() => setDisplayHistory(false)}
      />
    );
  }
  if (questions.length === 0) {
    return (
      <History
        history={history}
        handleExitHistory={() => setHasStarted(false)}
        isResults
      />
    );
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10
        }}
      >
        <Button
          onClick={() => setDisplayHistory(true)}
          isSmall
          style={{ marginRight: "0.7rem" }}
          disabled={history.length === 0}
        >
          History
        </Button>
        <Button onClick={() => setHasStarted(false)} isSmall>
          Restart
        </Button>
      </div>
      <div
        style={{
          textAlign: "center",
          paddingTop: "4rem",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <ResultsContainer>
            <FaCheck />
            <span
              style={{
                marginLeft: "1rem",
                marginRight: "3rem"
              }}
            >
              {correctAnswerTotal}
            </span>
            <FaTimes />
            <span style={{ marginLeft: "1rem" }}>
              {history.length - correctAnswerTotal}
            </span>
          </ResultsContainer>
        </div>
        <QuestionWord>{currentQuestion[roundType[0]]}</QuestionWord>

        <ChoicesContainer>
          {choices.map((choice, i) => (
            <Choice key={i} onClick={() => setSelectedAnswer(choice)}>
              <div
                style={{
                  borderBottom:
                    selectedAnswer === choice ? "2px solid" : "none",
                  display: "inline"
                }}
              >
                {choice[roundType[1]]}
              </div>
            </Choice>
          ))}
        </ChoicesContainer>
        <div />
        <div style={{ marginBottom: "2rem" }}>
          <Button
            onClick={handleConfirmAnswer(
              currentQuestion,
              choices,
              selectedAnswer
            )}
            disabled={selectedAnswer == null}
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
}

export default Quiz;
