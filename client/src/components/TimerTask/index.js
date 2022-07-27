import React from "react";
import Dropdown from "../../components/Dropdown/index";
import "./index.css";

/* let dtFormat = new Intl.DateTimeFormat("de-DE", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}); */

function TimerTask({ starttime, duration, title }) {
  /*   const roles = ["Admin", "Camera", "Light", "Sound"]; */
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
