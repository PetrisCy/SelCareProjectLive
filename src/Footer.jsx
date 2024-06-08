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
  ];
  const linksSupport = [
    { title: "contact", link: "https://www.example.com/link2" },
    { title: "shipping", link: "https://www.example.com/link1" },
    { title: "returns", link: "https://www.example.com/link2" },
    { title: "hours", link: "https://www.example.com/link3" },
  ];

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Shop </h4>
              <ul>
                <li>
                  <FooterNavigator links={links} />
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li>
                  <FooterNavigator links={linksAbout} />
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support </h4>
              <ul>
                <li>
                  <FooterNavigator links={linksSupport} />
                  {/* <a href="#">Test</a>
                  <a href="#">Test</a>
                  <a href="#">Test</a>
                  <a href="#">Test</a> */}
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow</h4>
              <ul>
                <div className="socials">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

/*
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
    </div>

    STyles
    
*/
/*
.footer-new {
  padding: 8rem 0rem;
}
.footer {
  width: 70%;
  margin: auto;
  display: flex;

  justify-content: space-between;
 
}
.footer-nav {
  display: flex;
  flex-direction: column;
}
.footer-navigator {
  display: flex;
}

.footer-nav h1 {
  box-shadow: 0 3px 0px rgba(0, 0, 0, 0.1);
  font-weight: 400;
  font-family: "EB Garamond", serif;
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 50px;

  color: rgba(59, 59, 59, 0.61);
}

.footer-nav a {
  font-family: "EB Garamond", serif;
  text-align: center;
  margin: 20px 20px;
  color: rgba(59, 59, 59, 0.61);
}
.footer-nav a:hover {
  color: black;
}

.subscribe h1 {
  font-size: 1.6rem;
  color: rgba(59, 59, 59, 0.61);
  font-family: "EB Garamond", serif;
  box-shadow: 0 3px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.footer-new p {
  margin-top: 50px;
  text-align: center;
  font-size: 1.2rem;
}
*/
