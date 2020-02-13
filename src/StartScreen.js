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

  return (
    <div>
      <div>Hindi Flashcards</div>
      <br />
      <br />
      <br />
      How many Questions?
      <div>
        <input
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
        {config.roundCount}
      </div>
      How many multiple choice answers?
      <div>
        <input
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
        {config.choiceCount}
      </div>
      <button onClick={() => setHasStarted(true)}>Start</button>
    </div>
  );
}
