import "./App.css";
import React, { useState } from "react";
import Display from "./components/Display";
import BtnDisplay from "./components/BtnDisplay";
import { interval } from "rxjs";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  let updateMs = time.ms;
  let updateS = time.s;
  let updateM = time.m;
  let updateH = time.h;

  const run = () => {
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setStatus(0);
  };

  const resume = () => start();
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Display time={time} />
          <BtnDisplay
            start={start}
            status={status}
            resume={resume}
            stop={stop}
            reset={reset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
