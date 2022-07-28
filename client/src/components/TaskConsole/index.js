import React, { useState, useEffect } from "react";
import AddTimer from "../AddTimer";
import TimerTask from "../TimerTask";
import FilterNav from "../FilterNav";
import axios from "axios";

function TaskConsole(props) {
  const [filterTimers, setFilterTimers] = useState(props.timers);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Timer Console</p>
        <FilterNav timers={props.timers} setFilterTimers={setFilterTimers} />
      </div>
      {filterTimers.map((timer) => (
        <TimerTask key={timer._id} {...timer} />
      ))}
      <AddTimer timers={filterTimers} setTimers={setFilterTimers} />
    </>
  );
}

export default TaskConsole;
