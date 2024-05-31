import SectionPic from "../src/assets/SectionPic1.jpg";
import SectionPic2 from "../src/assets/SectionPic3.jpg";
function Section() {
  return (
    <div className="section">
      <div className="section-container">
        <img src={SectionPic} alt="testing-image" />
        <div className="text-box">
          <h2>Pure, active and multifuctional</h2>
          <p>
            Each bottle is a masterpiece, meticulously crafted with the finest
            essential oils. We take pride in the art of perfumery, and our
            handcrafted fragrances are a testament to that dedication.
          </p>
        </div>

        <div className="text-box">
          <h2>Embrace the radiance of your lower body</h2>
          <p>
            Nourish your skin from head to toe with our luxurious body care
            products. We offer a range of natural, gentle formulas to cleanse,
            hydrate, and revitalize your skin, leaving it feeling soft, supple,
            and radiant.
          </p>
          <button className="button-all-products" id="button-all-products-2">
            view products
          </button>
        </div>
        <img src={SectionPic2} alt="testing-image" />
      </div>
    </div>
  );
}

export default Section;
