import Hero from "./Hero";
import Navigation from "./Navigation";
import BestSelling from "./BestSelling";
import Hero2 from "./Hero2";
import Section from "./Section";
import Hero3 from "./Hero3";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { HashRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Shop from "./Shop";

function App() {
  return (
    <div>
      <Hero />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BestSelling />
              <Hero2 />
              <Section />
              <Hero3 />
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// Props

// <Hero
// imageUrl={Background}
// title="unleash the essence"
// description="special skin and hair care without unnecessary / harmful ingredients"
// font={heroFont}
// />
