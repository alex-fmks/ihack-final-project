import React, { useState } from "react";
import AddTimer from "../AddTimer";
import TimerTask from "../TimerTask";
import FilterNav from "../FilterNav";

function TaskConsole() {
  const [timers, setTimers] = useState([]);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Timer Console</p>
        <FilterNav />
      </div>
      {timers.map((timer) => (
        <TimerTask key={timer._id} {...timer} />
      ))}
      <AddTimer timers={timers} setTimers={setTimers} />
    </>
  );
}

export default TaskConsole;
