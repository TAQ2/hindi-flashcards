import React, { useEffect } from "react";
import styled from "styled-components";

import { colours, screenBreakpoints } from "./theme";
import words from "./questions.json"; // @Cleanup - words is a bad name
import Button from "./Button";

const Title = styled.div`
  font-size: 9rem;
  font-weight: bold;
  color: ${colours.primary};

  @media (max-width: ${screenBreakpoints.tablet}px) {
    font-size: 7rem;
  }

  @media (max-width: ${screenBreakpoints.small}px) {
    font-size: 4rem;
  }
`;

const Slider = styled.input`
  width: 500px;
  margin-bottom: 2rem;
  cursor: pointer;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    width: 400px;
  }

  @media (max-width: ${screenBreakpoints.small}px) {
    width: 70%;
  }
`;

export default function SetupScreen({ setHasStarted, config, setConfig }) {
  useEffect(() => {
    const keyPressHandler = ({ key }) => key === "Enter" && setHasStarted(true);

    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [setHasStarted]);

  return (
    <div // @Cleanup - move this container to App.js?
      style={{
        textAlign: "center",
        maxWidth: screenBreakpoints.maxContentWidth,
        margin: "0 auto",
        paddingTop: "4rem",
        height: "100vh"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%"
        }}
      >
        <Title>Hindi Flashcards</Title>
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              fontSize: "1.5rem",
              color: colours.primary,
              marginBottom: "1rem"
            }}
          >
            {config.roundCount} Questions
          </div>
          <div>
            <Slider
              type="range"
              min={1}
              max={words.length}
              value={config.roundCount}
              onChange={e =>
                setConfig({
                  ...config,
                  roundCount: parseInt(e.currentTarget.value)
                })
              }
            />
          </div>
          {/* <div
        style={{
          fontSize: "1.5rem",
          color: colours.primary,
          marginBottom: "1rem"
        }}
      >
        {config.choiceCount} Multiple Choice Answers
      </div>
      <div>
        <input
          style={{
            width: "35%",
            marginBottom: "3rem",
            cursor: "pointer"
          }}
          type="range"
          min={2}
          max={8}
          value={config.choiceCount}
          onChange={e =>
            setConfig({
              ...config,
              choiceCount: parseInt(e.currentTarget.value)
            })
          }
        />
      </div> */}
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <Button onClick={() => setHasStarted(true)}>Start</Button>
        </div>
      </div>
    </div>
  );
}
