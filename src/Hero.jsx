import Background from "../src/assets/hero.jpg";

function Hero() {
  const Style = {
    backgroundImage: `url(${Background})`,
  };

  return (
    <div className="hero" style={Style}>
      <h1>unleash the essence</h1>
      <p>
        special skin and hair care without unnecessary / harmful ingredients
      </p>
    </div>
  );
}

export default Hero;
