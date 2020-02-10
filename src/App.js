import React, { useState } from "react";

import Quiz from "./Quiz";
import words from "./questions.json";
import SetupScreen from "./SetupScreen";

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [config, setConfig] = useState({
    questionCount: words.length
  });

  if (hasStarted) {
    return <Quiz />;
  } else {
    return (
      <SetupScreen
        setHasStarted={setHasStarted}
        config={config}
        setConfig={setConfig}
      />
    );
  }
}
