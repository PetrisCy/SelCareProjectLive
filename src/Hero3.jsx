import Background3 from "../src/assets/2151307271.jpg";

function Hero2() {
  const Style3 = {
    backgroundImage: `url(${Background3})`,
  };

  return (
    <div className="hero3" style={Style3}>
      <h1>volumise and repair hair kit</h1>
      <p>
        Experience the transformative power of nature. Infused with nourishing
        ingredients, this product repairs damage and volumizes hair for a
        healthy, revitalized look.
      </p>
      <div className="button-container-discover">
        <button className="button-discover">View Products</button>
      </div>
    </div>
  );
}

export default Hero2;
