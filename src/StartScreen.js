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
      <br />
      <br />
      <br />
      How many Questions?
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
      How many multiple choice answers?
      <div>
        <input // @Incomplete - make this into a slider so that we have a forced min and max
          name="choiceCount"
          onChange={handleUpdateConfig}
          value={config.choiceCount}
        />
      </div>
      <button onClick={() => setHasStarted(true)}>Start</button>
    </div>
  );
}
