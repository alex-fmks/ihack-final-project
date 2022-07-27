import React from "react";
import Dropdown from "../Dropdown/index";
import "./index.css";

function Toolbar() {
  return (
    <div className="toolbar-nav">
      <h1>Eventname</h1>
      <Dropdown />
    </div>
  );
}

export default Toolbar;
