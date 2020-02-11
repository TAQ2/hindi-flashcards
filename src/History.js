import React from "react";

import { TiTick } from "react-icons/ti";
import { GiSplitCross } from "react-icons/gi";

export default function History({ history }) {
  if (history.length === 0) {
    return <div>No History Yet</div>;
  }

  return (
    <div>
      {history.map((
        round, // @Cleanup - round is different terminolgy
        i
      ) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "2em"
          }}
        >
          <span>{round.question.english}</span>
          {round.choices.map((choice, i) => {
            let color = "black";

            if (choice === round.question) {
              color = "green";
            } else if (
              choice === round.answer &&
              round.answer !== round.question
            ) {
              color = "red";
            }

            return (
              <span key={i} style={{ color }}>
                {choice.englishPronunciation}
              </span>
            );
          })}
          {round.answer === round.question ? <TiTick /> : <GiSplitCross />}
        </div>
      ))}
    </div>
  );
}
