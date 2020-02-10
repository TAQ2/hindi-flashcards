import React, { useState } from "react";

import {
  shuffle,
  calculateChoices,
  calculateCorrectAnswerTotal
} from "./logic";
import { words } from "./data";

function App() {
  const [history, setHistory] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questions, setQuestions] = useState(shuffle([...words]));

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
        answer
        // @Incomplete - whether the question was asked in english or hindi or english pronunciation
      }
    ]);

    const newQuestions = questions.filter((_, i) => i !== questions.length - 1); // @Cleanup - probably a better way to do that
    setQuestions(newQuestions);
    setChoices(calculateChoices(newQuestions[newQuestions.length - 1], words));
  };

  const correctAnswerTotal = calculateCorrectAnswerTotal(history);

  if (questions.length === 0) {
    return (
      <div>
        <div>End of questions</div>
        <div>Number of correct{correctAnswerTotal}</div>
        <div>Total{history.length}</div>
      </div>
    );
  }

  return (
    <div>
      <div>{currentQuestion.english}</div>
      <br />
      {choices.map((choice, i) => (
        <div
          key={i}
          onClick={() => setSelectedAnswer(choice)}
          style={{ color: selectedAnswer === choice ? "red" : "black" }}
        >
          {choice.englishPronunciation}
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
      <div>Number of correct{correctAnswerTotal}</div>
      <div>Total{history.length}</div>
    </div>
  );
}

export default App;
