import "./Landing.css";
import Navbar from "../../components/Navbar/Navbar";

function Landing() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1 className="hero-headline">Ironhack Final Project</h1>
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
