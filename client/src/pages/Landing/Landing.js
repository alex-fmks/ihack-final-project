import "./Landing.css";
import Navbar from "../../components/Navbar";

function Landing() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1 className="hero-headline">Ironhack Stage Timer</h1>
        <p className="hero-introtext">Task Manager for Broadcasting events</p>
      </div>
    </>
  );
}

export default Landing;
