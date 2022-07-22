import { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = { username, email, password };
    axios
      .post("/api/auth/signup", requestBody)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleUsername = (event) => setUsername(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  return (
    <div className="sign-container">
      <form onSubmit={handleSubmit} style={{ width: "30%", padding: "2rem" }}>
        <h1>Signup</h1>
        {/*         <h3>Already have an account?</h3>
        <Link to="/login">Login</Link> */}
        <input
          type="text"
          placeholder="E-Mail"
          value={email}
          onChange={handleEmail}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Repeat Password"
          value={password}
          onChange={handlePassword}
          className="form-input"
        />
        <div style={{ display: "flex", gap: "20px" }}>
          <button type="submit" className="sign-btn">
            Create account
          </button>
          {/*           <button type="submit" className="sign-btn-google">
            Login with Google
          </button> */}
        </div>
      </form>

      {errorMessage && <h5>{errorMessage}</h5>}
    </div>
  );
}

export default SignUp;
