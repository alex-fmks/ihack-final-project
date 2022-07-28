import React, { useState } from "react";
import "./index.css";

function DropdownToggle(props) {
  const handleTimerRole = (event) => props.setTimerRole(event.target.value);
  const [selectedRole, setSelectedRole] = useState("Admin");
  return (
    <div>
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
    </div>
  );
}

export default DropdownToggle;
