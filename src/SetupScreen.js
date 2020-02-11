import React from "react";

export default function SetupScreen({ setHasStarted, config, setConfig }) {
  return (
    <div>
      <div>Hindi Flashcards</div>
      <button onClick={() => setHasStarted(true)}>Start</button>
    </div>
  );
}
