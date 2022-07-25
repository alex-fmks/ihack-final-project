import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function CreateEvent(props) {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [date, setDate] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState(0);
  const [postcode, setPostcode] = useState(0);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      title,
      client,
      date,
      location: { street, houseNumber, postcode },
      street,
      houseNumber,
      postcode,
    };
    axios
      .post("/create-event", requestBody)
      .then((response) => {
        console.log(response.data);
        navigate("http://localhost:5005/events");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleTitle = (event) => setTitle(event.target.value);
  const handleClient = (event) => setClient(event.target.value);
  const handleDate = (event) => setDate(event.target.value);
  const handleStreet = (event) => setStreet(event.target.value);
  const handleHouseNumber = (event) => setHouseNumber(event.target.value);
  const handlePostcode = (event) => setPostcode(event.target.value);

  return (
    <div className="create-container">
      <form onSubmit={handleSubmit} style={{ width: "30%", padding: "2rem" }}>
        <h1>Create event</h1>
        <input
          type="text"
          placeholder="Event title"
          value={title}
          onChange={handleTitle}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Client"
          value={client}
          onChange={handleClient}
          className="form-input"
        />
        <input
          type="date"
          placeholder="Event date"
          value={date}
          onChange={handleDate}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Street"
          value={street}
          onChange={handleStreet}
          className="form-input"
        />
        <input
          type="text"
          placeholder="House number"
          value={houseNumber}
          onChange={handleHouseNumber}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Post code"
          value={postcode}
          onChange={handlePostcode}
          className="form-input"
        />
        <button className="create-btn">Create event</button>
      </form>
      {errorMessage && <h5>{errorMessage}</h5>}
    </div>
  );
}

export default CreateEvent;
