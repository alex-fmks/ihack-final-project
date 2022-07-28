import React from "react";
import "./index.css";

function FilterNav({ timers, setFilterTimers }) {
  function filterRoles(event) {
    console.log(event.target.id);
    let filterRole = event.target.id;
    if (filterRole === "admin") {
      setFilterTimers(timers);
    } else {
      let filteredTimers = timers.filter((timer) => {
        return timer.role === filterRole;
      });
      setFilterTimers(filteredTimers);
    }
  }

  return (
    <>
      <ul className="nav-wrapper">
        <button onClick={filterRoles} className="nav-link" id="admin">
          Admin
        </button>
        <button onClick={filterRoles} className="nav-link" id="camera">
          Camera
        </button>
        <button onClick={filterRoles} className="nav-link" id="light">
          Light
        </button>
        <button onClick={filterRoles} className="nav-link" id="sound">
          Sound
        </button>
      </ul>
    </>
  );
}

export default FilterNav;
