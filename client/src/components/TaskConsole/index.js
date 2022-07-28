import React, { useState, useEffect } from "react";
import AddTimer from "../AddTimer";
import TimerTask from "../TimerTask";
import FilterNav from "../FilterNav";
import axios from "axios";

function TaskConsole(props) {
  const [timers, setTimers] = useState(props.timers);

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
