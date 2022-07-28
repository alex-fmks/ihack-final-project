import React, { useState } from "react";
import "./index.css";

function DropdownToggle(props) {
  const handleTimerRole = (event) => props.setTimerRole(event.target.value);
  return (
    <>
      <select
        value={props.timerRole}
        className="dropdown-select"
        onChange={handleTimerRole}
      >
        <option value="admin">Admin</option>
        <option value="camera">Camera</option>
        <option value="light">Light</option>
        <option value="sound">Sound</option>
      </select>
    </>
  );
}

export default DropdownToggle;
