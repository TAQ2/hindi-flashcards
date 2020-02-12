import React, { useState } from "react";

import Quiz from "./Quiz";
import words from "./questions.json";
import StartScreen from "./StartScreen";

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [config, setConfig] = useState({
    roundCount: words.length
  });

  if (hasStarted) {
    return <Quiz config={config} />;
  } else {
    return (
      <StartScreen
        setHasStarted={setHasStarted}
        config={config}
        setConfig={setConfig}
      />
    );
  }
}
