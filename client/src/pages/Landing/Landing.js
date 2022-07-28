import "./Landing.css";
import Navbar from "../../components/Navbar";

function Landing() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1 className="hero-headline">Ironhack Stage Timer</h1>
        <p className="hero-introtext">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
    </>
  );
}

export default Landing;
