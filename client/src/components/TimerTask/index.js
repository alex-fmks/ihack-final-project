import React, { useState, useEffect } from "react";
import Dropdown from "../../components/Dropdown/index";
import "./index.css";
import axios from "axios";
import { IconPlayerPlay } from "@tabler/icons";

function TimerTask({ starttime, duration, role, title, _id }) {
  const [startTime, setStartTime] = useState(
    new Date(starttime).toLocaleTimeString("de-DE")
  );
  const [timerDuration, setTimerDuration] = useState(duration);
  const [timerTitle, setTimerTitle] = useState(title);
  const [timerRole, setTimerRole] = useState(role);

  useEffect(() => {
    axios
      .post("/api/timers/edit", {
        duration: timerDuration,
        title: timerTitle,
        role: timerRole,
        timerId: _id,
      })
      .then((response) => {
        console.log("Changes saved");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [startTime, timerDuration, timerTitle, timerRole, _id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      starttime: startTime,
      duration: timerDuration,
      title: timerTitle,
      role: timerRole,
    };
    axios.post("/api/timers", requestBody).then((response) => {
      console.log(response);
    });
  };

  const handleStartTime = (event) => setStartTime(event.target.value);
  const handleTimerDuration = (event) => setTimerDuration(event.target.value);
  const handleTimerTitle = (event) => setTimerTitle(event.target.value);

  return (
    <form onSubmit={handleSubmit} className="timer-container">
      <button className="btn-timer-play">
        <IconPlayerPlay />
      </button>
      <input
        value={startTime}
        onChange={handleStartTime}
        className="timer-setup"
      />
      <input
        value={timerDuration}
        type="number"
        onChange={handleTimerDuration}
        className="timer-setup"
      />
      <input
        value={timerTitle}
        onChange={handleTimerTitle}
        className="timer-setup"
      />
      <Dropdown timerRole={timerRole} setTimerRole={setTimerRole} />
    </form>
  );
}

export default TimerTask;
