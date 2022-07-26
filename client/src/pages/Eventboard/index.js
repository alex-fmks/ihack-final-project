import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Timer from "../../components/Timer";
import "./index.css";

function Eventboard() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
    getOneEvent();
  }, []);

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

  return (
    <>
      {event === null ? (
        <h3>Loading...</h3>
      ) : (
        <div key={event.id}>
          <div className="board-header">
            <h1>{event.title}</h1>
          </div>
          <div className="board-console">
            <div className="client-data">
              <p className="client-name">{event.client}</p>
              <p>
                {event.location.street} {event.location.houseNumber}
              </p>
              <p>{event.location.postcode} Berlin</p>
            </div>
            <Timer />
          </div>
        </div>
      )}
    </>
  );
}

export default Eventboard;
