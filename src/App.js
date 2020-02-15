import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

import Quiz from "./Quiz";
import words from "./questions.json";
import StartScreen from "./StartScreen";
import { colours } from "./theme";

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [config, setConfig] = useState({
    roundCount: Math.ceil(words.length / 2),
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
    <div
      style={{
        backgroundColor: colours.quinary,
        width: "100vw",
        minHeight: "100vh"
      }}
    >
      {renderScreen()}
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
    </div>
  );
}
