import React from "react";
import "./index.css";

function Events() {
  return (
    <>
      <div className="event-header">
        <h1>All Events</h1>
        <a href="/create-event">
          <button className="add-btn">Create event</button>
        </a>
      </div>
      <div className="event-list">
        <div className="event-item">
          <p>Event title</p>
          <a href="/events/:id">
            <button className="view-btn">View</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Events;
