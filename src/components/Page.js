import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./page.css";
import icon from "./iconWide.png";

const Page = ({ children }) => {
  return (
    <div>
      <nav>
        <button>
          <a href="/green-shift">
            <img src={icon} alt="icon" height="25" />
          </a>
        </button>
        <button>
          <Link to="/map">Map</Link>
        </button>
        <button>
          <a href="#/about">About Us</a>
        </button>
        <button>
          <a href="#/signup">Sign Up</a>
        </button>
        <button>
          <a href="#/artists">Artists</a>
        </button>
      </nav>
      <div>
        {/* Add your search bar implementation here */}
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <header>
        <h1>Green Shift</h1>
      </header>
      <hr />
      <div>{children}</div>
      <Outlet />
      <hr />
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
