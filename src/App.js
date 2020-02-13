import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

import Quiz from "./Quiz";
import words from "./questions.json";
import StartScreen from "./StartScreen";

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [config, setConfig] = useState({
    roundCount: words.length,
    choiceCount: 3
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
    <div>
      {renderScreen()}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.github.com/taq2/hindi-flashcards"
      >
        <FaGithub
          size="4em"
          style={{ position: "fixed", bottom: 10, right: 10, color: "black" }}
        />
      </a>
    </div>
  );
}
