import React from "react";
import Dropdown from "../Dropdown/index";
import "./index.css";

function Toolbar() {
  return (
    <div className="toolbar-nav">
      <p>Test</p>
      <Dropdown />
    </div>
  );
}

export default Toolbar;
