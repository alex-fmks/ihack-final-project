import React from "react";
import Toolbar from "../../components/Toolbar";

function Dashboard() {
  return (
    <>
      <Toolbar />
      <h1>All Events</h1>
      <a href="/create-event">
        <button>Create event</button>
      </a>
    </>
  );
}

export default Dashboard;
