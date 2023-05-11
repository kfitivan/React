import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ContactImg from "./assets/img7.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={ContactImg}
        buttonText="Let's Talk"
        url="/"
        btnClass="show"
      />
    </>
  );
}
export default Contact;
