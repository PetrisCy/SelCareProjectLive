import FooterNavigator from "./FooterNavigator";

function Footer() {
  const links = [
    { title: "all products", link: "https://www.example.com/link1" },
    { title: "best selling", link: "https://www.example.com/link2" },

    { title: "skin care", link: "https://www.example.com/link4" },
    { title: "hair care", link: "https://www.example.com/link5" },
  ];
  const linksAbout = [
    { title: "our story", link: "https://www.example.com/link1" },

    { title: "careers", link: "https://www.example.com/link3" },
    { title: "facebook", link: "https://www.example.com/link4" },
    { title: "instagram", link: "https://www.example.com/link5" },
  ];
  const linksSupport = [
    { title: "contact", link: "https://www.example.com/link2" },
    { title: "shipping", link: "https://www.example.com/link1" },
    { title: "returns", link: "https://www.example.com/link2" },
    { title: "hours", link: "https://www.example.com/link3" },
  ];

  return (
    <div className="footer-new">
      <div className="footer">
        <div className="subscribe">
          <h1>Subscribe to our newsletter</h1>
        </div>
        <div className="footer-navigator">
          <FooterNavigator title="Shop" links={links} />
          <FooterNavigator title="About" links={linksAbout} />
          <FooterNavigator title="Support" links={linksSupport} />
        </div>
      </div>
      {/* <p>&copy; 2024 Designed by Petris Hajigiannis</p> */}
    </div>
  );
}

export default Footer;
// all products - best selling - lower body - skin care - hair care
