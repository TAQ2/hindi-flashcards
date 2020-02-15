import React, { useState } from "react";
import styled from "styled-components";

import {
  shuffle,
  calculateChoices,
  calculateCorrectAnswerTotal
} from "./logic";
import words from "./questions.json"; // @Cleanup - bad name
import History from "./History";
import { colours, screenBreakpoints } from "./theme";

const Choice = styled.div`
  text-decoration: ${({ isSelected }) => (isSelected ? "underline" : "none")};
  font-size: 2rem;
  // set lineheight because the set default between english and hindi is different
  line-height: 3rem;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    margin-bottom: 1rem;
  }
`;

const ChoicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 4rem 8rem 4rem;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    flex-direction: column;
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

  const handleConfirmAnswer = (question, choices, answer) => () => {
    setSelectedAnswer(null);
    setHistory([
      ...history,
      {
        questionType: "WORD",
        question,
        choices,
        answer,
        type: roundType
        // @Incomplete - whether the question was asked in english or hindi or english pronunciation
      }
    ]);

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
    // @Cleanup - make results into new file
    // @Cleanup - should this new file be rendered by App.js instead of Quiz.js

    return (
      <div>
        <div>End of questions</div>
        <div>Number of correct {correctAnswerTotal}</div>
        <div>Total {history.length}</div>
        <History history={history} />
        <button onClick={() => setHasStarted(false)}>Restart</button>
      </div>
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
        <button
          onClick={() => setDisplayHistory(true)}
          style={{
            // @Cleanup - the following style is copied from button on start page
            fontSize: "1rem",
            border: "2px solid " + colours.secondary,
            backgroundColor: colours.quinary,
            borderRadius: 5,
            color: colours.secondary,
            padding: "0.2rem 1rem",
            cursor: "pointer",
            marginRight: "0.7rem"
          }}
        >
          History
        </button>
        <button
          onClick={() => setHasStarted(false)}
          style={{
            // @Cleanup - the following style is copied from button on start page
            fontSize: "1rem",
            border: "2px solid " + colours.secondary,
            backgroundColor: colours.quinary,
            borderRadius: 5,
            color: colours.secondary,
            padding: "0.2rem 1rem",
            cursor: "pointer"
          }}
        >
          Restart
        </button>
      </div>
      <div
        style={{
          textAlign: "center",
          maxWidth: screenBreakpoints.maxContentWidth,
          margin: "0 auto",
          paddingTop: "4rem"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "4rem"
          }}
        >
          <div>Correct answers {correctAnswerTotal}</div>
          <div>
            {history.length + 1} out of {config.roundCount} questions
          </div>
        </div>
        <div
          style={{
            fontSize: "5rem",
            marginBottom: "8rem",
            // set lineheight because the set default between english and hindi is different
            lineHeight: "7rem"
          }}
        >
          {currentQuestion[roundType[0]]}
        </div>
        <ChoicesContainer>
          {choices.map((choice, i) => (
            <Choice
              key={i}
              onClick={() => setSelectedAnswer(choice)}
              isSelected={selectedAnswer === choice}
            >
              {choice[roundType[1]]}
            </Choice>
          ))}
        </ChoicesContainer>

        <button
          onClick={handleConfirmAnswer(
            currentQuestion,
            choices,
            selectedAnswer
          )}
          disabled={selectedAnswer == null}
          style={{
            // @Cleanup - other buttons are the same style
            fontSize: "2rem",
            backgroundColor: colours.quinary,
            borderRadius: 5,
            border:
              "4px solid " +
              (selectedAnswer != null ? colours.secondary : "gray"),
            color: selectedAnswer != null ? colours.secondary : "gray",
            padding: "0.2rem 1rem",
            cursor: selectedAnswer != null ? "pointer" : "auto"
          }}
        >
          Confirm
        </button>
        {/* <History history={history} /> */}
      </div>
    </>
  );
}

export default Quiz;
