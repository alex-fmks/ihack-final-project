import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Eventboard() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  const getOneEvent = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`http://localhost:5005/api/events/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setEvent(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOneEvent();
  }, []);

  return (
    <>
      {event === null ? (
        <h3>Loading...</h3>
      ) : (
        <div key={event.id}>
          <h1>{event.title}</h1>
        </div>
      )}
    </>
  );
}

export default Eventboard;
