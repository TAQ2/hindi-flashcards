import React from "react";

export default function SetupScreen({ setHasStarted, config, setConfig }) {
  return (
    <div>
      <div>fsd</div>
      <button onClick={() => setHasStarted(true)}>Start</button>
    </div>
  );
}
