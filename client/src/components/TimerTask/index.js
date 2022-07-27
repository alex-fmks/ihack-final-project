import React from "react";
import "./index.css";

function TimerTask({ starttime, duration, title }) {
  return (
    <div className="timer-container">
      <p className="timer-start">{starttime}</p>
      <p className="timer-duration">{duration}</p>
      <p className="timer-title">{title}</p>
    </div>
  );
}

export default TimerTask;
