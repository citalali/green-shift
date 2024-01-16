import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Page";
import Home from "./pages/Home";
import Map from "./pages/MapView";
import Signup from "./pages/Signup";
import Test from "./pages/Test";
import About from "./pages/About";
import Artists from "./pages/Artists";
import { HashRouter } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="map" element={<Map />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="artists" element={<Artists />} />
          <Route path="*" element={<Test />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
