import React, { useEffect } from "react";

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
      <button onClick={() => setHasStarted(true)}>Start</button>
    </div>
  );
}
