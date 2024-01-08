import React from "react";

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    boxSizing: "border-box",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    padding: "5px",
    margin: "0 10px",
  },
  searchBar: {
    marginBottom: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "10px",
  },
  hr: {
    border: "1px solid #ccc",
    margin: "20px 0",
  },
  footer: {
    textAlign: "center",
  },
};

const Page = ({ children }) => {
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <button>
          <a href="/" style={styles.link}>
            LOGO HERE
          </a>
        </button>
        <button>
          <a href="/map" style={styles.link}>
            Map
          </a>
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
