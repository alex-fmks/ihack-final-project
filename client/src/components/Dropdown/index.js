import React from "react";
import "./index.css";

function DropdownToggle() {
  return (
    <>
      <select className="dropdown-select">
        <option value="camera">Kamera</option>
        <option value="light">Licht</option>
        <option value="sound">Sound</option>
      </select>
    </>
  );
}

export default DropdownToggle;
