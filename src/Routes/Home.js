import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import HomeImg from "../assets/img5.jpg";
import Destination from "./Components/Destination";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
    </>
  );
}
export default Home;
