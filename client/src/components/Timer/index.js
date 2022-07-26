import React from "react";
import "./index.css";

const Timer = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="Timers">
      <div className="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div id="btns">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)} className="btn-start">
            Start
          </button>
        )}
        {timerOn && (
          <button onClick={() => setTimerOn(false)} className="btn-stop">
            Stop
          </button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)} className="btn-reset">
            Reset
          </button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)} className="btn-resume">
            Resume
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
