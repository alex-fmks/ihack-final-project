import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/events/${id}`)
      .then((response) => {
        console.log(response);
        setEvent(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {event === null ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h1>{event.title}</h1>
        </>
      )}
    </>
  );
}

export default EventDetails;
