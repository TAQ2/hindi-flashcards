import React, { useEffect } from "react";

import words from "./questions.json"; // @Cleanup - words is a bad name

export default function SetupScreen({ setHasStarted, config, setConfig }) {
  useEffect(() => {
    const keyPressHandler = ({ key }) => key === "Enter" && setHasStarted(true);

    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [setHasStarted]);

  const handleUpdateConfig = e => {
    // @Incomplete - use a slider to avoid validation stuff
    setConfig({
      ...config,
      [e.currentTarget.name]: parseInt(e.currentTarget.value, 10)
    });
  };

  const handleUseAllWords = () => {
    setConfig({ ...config, roundCount: words.length });
  };

  return (
    <div>
      <div>Hindi Flashcards</div>
      <div>
        <input
          name="roundCount"
          onChange={handleUpdateConfig}
          value={config.roundCount}
        />

        <button
          onClick={handleUseAllWords}
          disabled={words.length === config.roundCount}
        >
          All
        </button>
      </div>
      <button onClick={() => setHasStarted(true)}>Start</button>
    </div>
  );
}