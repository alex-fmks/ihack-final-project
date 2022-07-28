import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function FilterNav() {
  return (
    <>
      <ul className="nav-wrapper">
        <Link className="nav-link" to="/">
          Admin
        </Link>
        <Link className="nav-link" to="/">
          Camera
        </Link>
        <Link className="nav-link" to="/">
          Light
        </Link>
        <Link className="nav-link" to="/">
          Sound
        </Link>
      </ul>
    </>
  );
}

export default FilterNav;
