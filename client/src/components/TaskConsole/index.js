import React, { useState } from "react";
import AddTimer from "../AddTimer";
import TimerTask from "../TimerTask";

function TaskConsole() {
  const [timers, setTimers] = useState([]);
  return (
    <>
      <p>Timer Console</p>
      {timers.map((timer) => (
        <TimerTask key={timer._id} {...timer} />
      ))}
      <AddTimer timers={timers} setTimers={setTimers} />
    </>
  );
}

export default TaskConsole;
