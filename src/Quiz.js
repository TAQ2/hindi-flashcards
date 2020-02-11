import React, { useState } from "react";

import {
  shuffle,
  calculateChoices,
  calculateCorrectAnswerTotal
} from "./logic";
import words from "./questions.json"; // @Cleanup - bad name
import History from "./History";

function calculateRandomRoundType() {
  let roundType = ["english", "englishPronunciation"]; // @Cleanup - strings should be constants

  const int = Math.floor(Math.random() * 6); // generates int between 0 and 5

  if (int === 1) {
    roundType = ["english", "hindi"];
  } else if (int === 2) {
    roundType = ["hindi", "english"];
  } else if (int === 3) {
    roundType = ["hindi", "englishPronunciation"];
  } else if (int === 4) {
    roundType = ["englishPronunciation", "english"];
  } else if (int === 5) {
    roundType = ["englishPronunciation", "hindi"];
  }

  return roundType;
}

function Quiz() {
  const [history, setHistory] = useState([]);
  const [roundType, setRoundType] = useState(calculateRandomRoundType());
  const [questions, setQuestions] = useState(shuffle([...words]));
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[questions.length - 1];
  const [choices, setChoices] = useState(
    calculateChoices(currentQuestion, words)
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
    setChoices(calculateChoices(newQuestions[newQuestions.length - 1], words));

    setRoundType(calculateRandomRoundType());
  };

  const correctAnswerTotal = calculateCorrectAnswerTotal(history);

  if (questions.length === 0) {
    return (
      <div>
        <div>End of questions</div>
        <div>Number of correct {correctAnswerTotal}</div>
        <div>Total {history.length}</div>
        <History history={history} />
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
      <br />
      <br />
      <br />
      <History history={history} />
    </div>
  );
}

export default Quiz;
