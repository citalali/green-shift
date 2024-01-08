import React from "react";
import Head from "react-helmet"; // Assuming you are using react-helmet for head management
import Page from "./components/Page";

function App() {
  return (
    <div className="root">
      <div>
        <title>Create React App</title>
        <link rel="icon" href="/favicon.ico" />
      </div>
      <Page>
        <main>
          <p>This is the home Page</p>
          <p>blabla</p>
        </main>

        <footer>
          <p>testtesttest</p>
        </footer>
      </Page>
    </div>
  );
}

export default App;
