import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutImg from "./assets/img6.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
    </>
  );
}
export default About;
