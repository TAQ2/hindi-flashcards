import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

import Button from "./Button";
import { colours, screenBreakpoints } from "./theme";
import { calculateCorrectAnswerTotal } from "./logic";

const LargeContainer = styled.div`
  padding-top: 4rem;

  @media (max-width: ${screenBreakpoints.maxContentWidth}px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (max-width: 900px) {
    font-size: 0.7rem;
  }

  @media (max-width: ${screenBreakpoints.tablet}px) {
    display: none;
  }
`;

// @Cleanup - can we consolodate small and large container childrens
const SmallContainer = styled.div`
  text-align: center;
  padding-top: 1rem;

  @media (min-width: ${screenBreakpoints.tablet + 1}px) {
    display: none;
  }
`;

// @Cleanup
const Thing = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${screenBreakpoints.small}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function History({ history, handleExitHistory, isResults }) {
  const ActionButton = isResults
    ? () => (
        <Button
          onClick={handleExitHistory}
          isSmall
          style={{
            position: "absolute",
            top: 10,
            right: 10
          }}
        >
          Restart
        </Button>
      )
    : () => (
        <FaTimes
          onClick={handleExitHistory}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            fontSize: "3rem",
            color: "gray",
            cursor: "pointer"
          }}
        />
      );

  return (
    <>
      <ActionButton />
      <div
        style={{
          padding: "4rem 0",
          margin: "0 auto",
          maxWidth: screenBreakpoints.maxContentWidth,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh"
        }}
      >
        {isResults && (
          <div style={{ fontSize: "2rem", textAlign: "center" }}>
            Congratulations! You got {calculateCorrectAnswerTotal(history)} out
            of {history.length} correct.
          </div>
        )}
        <LargeContainer>
          {history.map((
            round, // @Cleanup - round is different terminolgy
            i
          ) => (
            <div
              key={i}
              style={{
                display: "flex",
                fontSize: "2em",
                color: colours.primary
              }}
            >
              <span style={{ width: "20%", fontWeight: "bold" }}>
                {round.question[round.type[0]]}
              </span>
              {round.choices.map((choice, i) => {
                let color = colours.primary;

                if (choice === round.question) {
                  color = "green";
                } else if (
                  choice === round.answer &&
                  round.answer !== round.question
                ) {
                  color = "red";
                }

                return (
                  <span key={i} style={{ width: "20%", color }}>
                    {choice[round.type[1]]}
                  </span>
                );
              })}
            </div>
          ))}
        </LargeContainer>

        <SmallContainer>
          {history.map((
            round, // @Cleanup - round is different terminolgy
            i
          ) => (
            <div
              key={i}
              style={{
                margin: "1rem 0",
                padding: "1rem 0"
              }}
            >
              <div
                style={{
                  fontSize: "1.5em",
                  fontWeight: "bold",
                  color: colours.primary
                }}
              >
                {round.question[round.type[0]]}
              </div>
              <Thing>
                {round.choices.map((choice, i) => {
                  let color = colours.primary;

                  if (choice === round.question) {
                    color = "green";
                  } else if (
                    choice === round.answer &&
                    round.answer !== round.question
                  ) {
                    color = "red";
                  }

                  return (
                    <span
                      key={i}
                      style={{ width: "25%", color, fontSize: "1.5rem" }}
                    >
                      {choice[round.type[1]]}
                    </span>
                  );
                })}
              </Thing>
            </div>
          ))}
        </SmallContainer>
      </div>
    </>
  );
}
