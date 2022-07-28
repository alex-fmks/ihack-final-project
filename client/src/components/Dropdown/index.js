import React, { useState } from "react";
import "./index.css";

function DropdownToggle(props) {
  const handleTimerRole = (event) => props.setTimerRole(event.target.value);
  const [selectedRole, setSelectedRole] = useState("Admin");
  return (
    <div>
      {selectedRole.map((item, index) => (
        <select
          value={props.timerRole}
          className="dropdown-select"
          onChange={handleTimerRole}
          key={index}
        >
          <option value="admin">{item}</option>
          <option value="camera">{item}</option>
          <option value="light">{item}</option>
          <option value="sound">{item}</option>
        </select>
      ))}
    </div>
  );
}

export default DropdownToggle;
