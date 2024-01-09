import React from "react";
import { Outlet, Link } from "react-router-dom";

const Page = ({ children }) => {
  const styles = {
    page: {
      margin: "20px",
      padding: "20px",
      border: "2px solid #3498db",
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    h1: {
      color: "#3498db",
    },
    nav: {
      width: "100%",
      display: "flex",
      gap: "10px",
      justifyContent: "center",
    },
    button: {
      backgroundColor: "#3498db",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      padding: "8px 12px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#21618c",
    },
    searchBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "50%",
      margin: "15px auto",
    },
    input: {
      flex: "1",
      padding: "8px",
      border: "1px solid #3498db",
      borderRadius: "4px",
    },
    searchButton: {
      backgroundColor: "#3498db",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      padding: "8px 12px",
      cursor: "pointer",
    },
    searchButtonHover: {
      backgroundColor: "#21618c",
    },
    footer: {
      marginTop: "20px",
      textAlign: "center",
    },
    ul: {
      listStyle: "none",
      padding: "0",
      display: "flex",
      justifyContent: "center",
    },
    li: {
      marginRight: "15px",
    },
    link: {
      color: "#3498db",
      textDecoration: "none",
    },
    linkHover: {
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <button>
          <a href="/" style={styles.link}>
            LOGO HERE
          </a>
        </button>
        <button>
          <Link to="/map">Map</Link>
        </button>
        <button>
          <a href="/about" style={styles.link}>
            About Us
          </a>
        </button>
        <button>
          <a href="/signup" style={styles.link}>
            Sign Up
          </a>
        </button>
        <button>
          <a href="/later" style={styles.link}>
            Later
          </a>
        </button>
      </nav>
      <div style={styles.searchBar}>
        {/* Add your search bar implementation here */}
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <header style={styles.header}>
        <h1>Green Shift</h1>
      </header>
      <hr style={styles.hr} />
      <div>{children}</div>
      <Outlet />
      <hr style={styles.hr} />
      <footer style={styles.footer}>
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
