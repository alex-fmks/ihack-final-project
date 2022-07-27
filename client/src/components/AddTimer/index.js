import React from "react";
import axios from "axios";
import "./index.css";

function AddTimer(props) {
  function handleAddTimer() {
    axios
      .post("http://localhost:5005/api/timers", {
        duration: 0,
        title: "Title",
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
