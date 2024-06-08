import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="nav">
        <div className="logo">
          <a href="#">Logo</a>
        </div>
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="shop">Shop</NavLink>
            {/* <a href="#">Shop</a> */}
          </li>
          <li>
            <NavLink to="/">About</NavLink>
            {/* <a href="#">About</a> */}
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
            {/* <a href="#">Contact</a> */}
          </li>
        </ul>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;

{
  /* <FaTimes />
<FaBars /> */
}
