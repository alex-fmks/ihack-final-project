import React from "react";
import axios from "axios";
import "./index.css";
import { useParams } from "react-router-dom";

function AddTimer(props) {
  const { id } = useParams();
  function handleAddTimer() {
    axios
      .post("/api/timers", {
        duration: 0,
        title: "Title",
        role: "Admin",
        eventId: id,
      })
      .then((response) => {
        props.setTimers([...props.timers, response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <button onClick={handleAddTimer} className="btn-add-timer">
        Add Timer +
      </button>
    </>
  );
}

export default AddTimer;
