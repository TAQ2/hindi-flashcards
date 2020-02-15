import React from "react";

import { TiTick } from "react-icons/ti";
import { GiSplitCross } from "react-icons/gi";

export default function History({ history, handleExitHistory }) {
  return (
    <>
      <button
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          fontSize: "3rem",
          color: "gray",
          border: "none",
          background: "transparent",
          cursor: "pointer"
        }}
        onClick={handleExitHistory}
      >
        X
      </button>
      <div
        style={{
          paddingTop: "6rem"
        }}
      >
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
            <span>{round.question[round.type[0]]}</span>
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
                  {choice[round.type[1]]}
                </span>
              );
            })}
            {round.answer === round.question ? <TiTick /> : <GiSplitCross />}
          </div>
        ))}
      </div>
    </>
  );
}
