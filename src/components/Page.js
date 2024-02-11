import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./page.css";
import logo from "../content/logo.png";

const Page = ({ children, showHeader }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button className="menuIcon" onClick={handleToggleMenu}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>
      <nav className={`navBar ${isMenuOpen ? "open" : ""}`}>
        <button>
          <a href="/">
            <img src={logo} alt="icon" height="50" />
          </a>
        </button>
        <button>
          <Link to="/map">Map</Link>
        </button>
        <button>
          <a href="#/signup">Sign Up</a>
        </button>
        <button>
          <a href="#/about">Login</a>
        </button>
      </nav>

      <header>
        <h1>
          Design <br /> the <i>future</i>
        </h1>
      </header>
      <div>{children}</div>
      <Outlet />
    </div>
  );
};

export default Page;
