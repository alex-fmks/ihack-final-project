import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function EventCard({ title, client, date, _id }) {
  return (
    <Link to={`/events/${_id}`} className="event-item">
      <div>
        <h1 className="event-title">{title}</h1>
      </div>
      <h2 className="event-client">{client}</h2>
      <p className="event-date">Date of event: {date}</p>
    </Link>
  );
}

export default EventCard;
