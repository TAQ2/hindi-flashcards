import React, { useState } from "react";

import {
  shuffle,
  calculateChoices,
  calculateCorrectAnswerTotal
} from "./logic";
import words from "./questions.json"; // @Cleanup - bad name
import History from "./History";

// @Cleanup - strings in the function should be constants
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
    <div>
      <div>{currentQuestion[roundType[0]]}</div>
      <br />
      {choices.map((choice, i) => (
        <div
          key={i}
          onClick={() => setSelectedAnswer(choice)}
          style={{ color: selectedAnswer === choice ? "red" : "black" }}
        >
          {choice[roundType[1]]}
        </div>
      ))}
      {selectedAnswer != null && (
        <button
          onClick={handleConfirmAnswer(
            currentQuestion,
            choices,
            selectedAnswer
          )}
        >
          Confirmation
        </button>
      )}
      <br />
      <br />
      <br />
      <div>Number of correct {correctAnswerTotal}</div>
      <div>Total {history.length}</div>
      <div>Out of {config.roundCount}</div>
      <br />
      <br />
      <br />
      <History history={history} />
      <button onClick={() => setHasStarted(false)}>Restart</button>
    </div>
  );
}

export default Quiz;
