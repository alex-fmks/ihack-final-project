import { useState } from "react";
import axios from "axios";
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
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input type="text" value={email} onChange={handleEmail} />

        <label htmlFor="password">Password: </label>
        <input type="password" value={password} onChange={handlePassword} />

        <label htmlFor="name">Name: </label>
        <input type="text" value={username} onChange={handleUsername} />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <h5>{errorMessage}</h5>}

      <h3>Already have an account?</h3>
      <Link to="/login">Login</Link>
    </>
  );
}

export default SignUp;
