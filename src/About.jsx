import React from "react";
import awardImg from "../src/assets/award.jpg";
function About() {
  return (
    <>
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="container-grid">
        <div className="grid item1">
          <div>
            <h1>Our History</h1>
            <p>
              Founded in 1992, The Perfume Shop set out with the simple idea of
              making luxury perfume brands accessible to everyone at an
              affordable price. With the first store openings in Birmingham,
              Belfast & Milton Keynes, The Perfume Shop developed a genuine
              passion for delighting customers with expert perfume knowledge and
              the highest customer service standards which remain at the
              forefront of everything the brand stands for today. In 2005 The
              Perfume Shop was acquired by the world's largest international
              health and beauty retailer AS Watson - operating over 16,300
              stores in 28 markets. Find out more about our parent company.
            </p>
          </div>
        </div>
        <div className="grid item2">
          <img src={awardImg} alt="" />
        </div>
        <div className="grid item3">
          <div className="grid-item3">
            <h1>Our Mission</h1>
            <p>
              “To share our genuine passion for perfume & people and offer the
              most knowledgeable fragrance expertise on the high street.”
            </p>
          </div>
        </div>
        <div className="grid item4">
          <div className="grid-item4">
            <h1>Why shop with us</h1>
            <div className="grid-list">
              <p>Free standard Shipping</p>
              <p>Savings Program </p>
              <p>Free Gift wrap service</p>
              <p>Loyalty card meembership</p>
              <p>Leading perfume experts</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
