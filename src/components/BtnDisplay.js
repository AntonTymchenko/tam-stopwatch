import React from "react";

function BtnDisplay({ start, status, stop, reset, resume }) {
  return (
    <div>
      {status === 0 ? (
        <button
          type="button"
          className="stopwatch-btn stopwatch-btn-gre"
          onClick={start}
        >
          Start
        </button>
      ) : null}
      {status === 1 ? (
        <div>
          <button
            type="button"
            className="stopwatch-btn stopwatch-btn-red"
            onClick={stop}
          >
            Stop
          </button>
          <button
            type="button"
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      ) : null}
      {status === 2 ? (
        <div>
          <button
            type="button"
            className="stopwatch-btn stopwatch-btn-gre"
            onClick={resume}
          >
            Resume
          </button>
          <button
            type="button"
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default BtnDisplay;
