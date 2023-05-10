import "./Herostyles.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <img alt="heroimage" src="./assets/img3.jpg" />
        <div className="hero-text">
          <h1>Your Journey Your Story</h1>
          <p>Choose Your Favourite Destination</p>
          <a href="/">Travel Plan</a>
        </div>
      </div>
    </>
  );
}
export default Hero;
