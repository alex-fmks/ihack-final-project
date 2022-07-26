import React from "react";
import "./index.css";
import {
  IconPlayerPlay,
  IconPlayerSkipBack,
  IconPlayerSkipForward,
  IconPlayerStop,
  IconRefresh,
} from "@tabler/icons";

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
        <button onClick={() => setTime(0)} className="btn-skip">
          <IconPlayerSkipBack />
        </button>
        {!timerOn && (
          <button onClick={() => setTimerOn(true)} className="btn-start">
            <IconPlayerPlay />
          </button>
        )}
        {timerOn && (
          <button onClick={() => setTimerOn(false)} className="btn-stop">
            <IconPlayerStop />
          </button>
        )}
        <button onClick={() => setTime(0)} className="btn-skip">
          <IconPlayerSkipForward />
        </button>
      </div>
    </div>
  );
};

export default Timer;
