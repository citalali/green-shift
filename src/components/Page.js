import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./page.css";

const Page = ({ children }) => {
  return (
    <div>
      <nav>
        <button>
          <a href="/">LOGO HERE</a>
        </button>
        <button>
          <Link to="/map">Map</Link>
        </button>
        <button>
          <a href="/about">About Us</a>
        </button>
        <button>
          <a href="/signup">Sign Up</a>
        </button>
        <button>
          <a href="/later">Later</a>
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
            <a href="#">Impressum</a>
          </li>
          <li>
            <a href="#">Blabla</a>
          </li>
          <li>
            <a href="#">Another Thing</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Page;
