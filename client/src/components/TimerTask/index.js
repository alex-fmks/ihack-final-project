import React from "react";
import Dropdown from "../../components/Dropdown/index";
import "./index.css";

function TimerTask({ starttime, duration, title, role }) {
  return (
    <div className="timer-container">
      <p className="timer-start">{starttime}</p>
      <p className="timer-duration">{duration}</p>
      <p className="timer-title">{title}</p>
      <Dropdown />
    </div>
  );
}

export default TimerTask;
