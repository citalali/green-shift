import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./page.css";
import icon from "./iconWide.png";
import logo from "../content/logo.png";

const Page = ({ children }) => {
  return (
    <div>
      <nav className="navBar">
        <button>
          <a href="/green-shift">
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
          <a href="#/artists">Discover</a>
        </button>
        <button>
          <a href="#/about">Login</a>
        </button>
      </nav>
      <header>
        <h1>
          Design <br /> the <strong>future</strong>
        </h1>
      </header>
      <div>{children}</div>
      <Outlet />
      <footer>
        <ul>
          <li>
            <a href="#" className="footer">
              Impressum
            </a>
          </li>
          <li>
            <a href="#" className="footer">
              Blabla
            </a>
          </li>
          <li>
            <a href="#" className="footer">
              Another Thing
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Page;
