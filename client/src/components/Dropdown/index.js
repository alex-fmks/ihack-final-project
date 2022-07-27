import React from "react";
import "./index.css";

function DropdownToggle() {
  return (
    <>
      <select className="dropdown-select">
        <option value="admin">Admin</option>
        <option value="camera">Camera</option>
        <option value="light">Light</option>
        <option value="sound">Sound</option>
      </select>
    </>
  );
}

export default DropdownToggle;
