import React, { useState, useContext } from "react";
import "./index.css";
import Logo from "../../logo.svg";
import XIcon from "../../xclose.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth";

function Modal({ open, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, verifyStoredToken } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = { username, password };
    axios
      .post("http://localhost:5005/api/auth/login", requestBody)
      .then((response) => {
        const token = response.data.authToken;
        storeToken(token);
        verifyStoredToken().then(() => {
          navigate("/dashboard");
        });
      })
      .catch((err) => {
        console.log(err);
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleUsername = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  if (!open) return null;
  return (
    <>
      <div className="modal-overlay" />
      <div className="modal-container">
        <img
          src={XIcon}
          onClick={onClose}
          alt="Close Login"
          className="close-modal"
        />
        <img src={Logo} alt="Logo" className="login-logo" />
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <p>LOGIN</p>
          </div>
          <input
            value={username}
            className="login-name"
            onChange={handleUsername}
            type="text"
            placeholder="Username"
          />
          <input
            value={password}
            className="login-pw"
            onChange={handlePassword}
            type="password"
            placeholder="Password"
          />
          <button className="login-btn">Login</button>
        </form>
        {errorMessage && <h5>{errorMessage}</h5>}
      </div>
    </>
  );
}

export default Modal;
