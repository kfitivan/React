import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ServiceImg from "./assets/img1.jpg";

function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={ServiceImg}
        title="Services"
        btnClass="show"
      />
    </>
  );
}
export default Services;
