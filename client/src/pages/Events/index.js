import axios from "axios";
import React, { useState, useEffect } from "react";
import EventCard from "../../components/Eventcard/index";
import { Link } from "react-router-dom";
import "./index.css";

function Events() {
  const [events, setEvents] = useState([]);

  const getAllEvents = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get("http://localhost:5005/api/events", {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setEvents(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <>
      <div className="event-header">
        <h1>All Events</h1>
        <Link to="/create-event">
          <button className="add-btn">Create event</button>
        </Link>
      </div>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event._id} {...event} />
        ))}
      </div>
    </>
  );
}

export default Events;
