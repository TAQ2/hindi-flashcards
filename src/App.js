import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

import Quiz from "./Quiz";
import words from "./questions.json";
import StartScreen from "./StartScreen";

import { screenBreakpoints } from "./theme";

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [config, setConfig] = useState({
    roundCount: words.length,
    choiceCount: 4
  });

  const renderScreen = () => {
    if (hasStarted) {
      return <Quiz config={config} setHasStarted={setHasStarted} />;
    } else {
      return (
        <StartScreen
          setHasStarted={setHasStarted}
          config={config}
          setConfig={setConfig}
        />
      );
    }
  };

  return (
    <>
      <div
        style={{
          height: "100%",
          maxWidth: screenBreakpoints.maxContentWidth,
          margin: "0 auto"
        }}
      >
        {renderScreen()}
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.github.com/taq2/hindi-flashcards"
      >
        <FaGithub
          style={{
            position: "fixed",
            bottom: 10,
            right: 10,
            color: "black",
            fontSize: "3rem"
          }}
        />
      </a>
    </>
  );
}
