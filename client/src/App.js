import "./App.css";
import Link from "react";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Ironhack Final Project 👻</p>
        <Link to={<SignUp />} />
      </header>
    </div>
  );
}

export default App;
