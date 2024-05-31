import Background2 from "../src/assets/hero2.jpg";

function Hero2() {
  const Style2 = {
    backgroundImage: `url(${Background2})`,
  };

  return (
    <div className="hero2" style={Style2}>
      <h1>beauty begins with the skin</h1>
      <p>"Love your skin and it will love you back."</p>
      <div className="button-container-discover">
        <button className="button-discover">discover more</button>
      </div>
    </div>
  );
}

export default Hero2;
