import React from "react";
import DynamicMap from "../components/DynamicMap";
import { useState } from "react";
import "../styles/map.css";

const MapView = () => {
  const [selectedCity, setSelectedCity] = useState("Berlin");
  const [position, setPosition] = useState({ lat: 52.52, lng: 13.405 }); // Default to Berlin coordinates
  const [mapKey, setMapKey] = useState(1); // Add a key to force re-render

  const handleCityChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCity(selectedValue);

    switch (selectedValue) {
      case "Berlin":
        setPosition({ lat: 52.52, lng: 13.405 });
        break;
      case "Hamburg":
        setPosition({ lat: 53.5511, lng: 9.9937 });
        break;
      case "Bremen":
        setPosition({ lat: 53.0793, lng: 8.8017 });
        break;
      case "London":
        setPosition({ lat: 51.509865, lng: -0.118092 });
        break;
      default:
        setPosition({ lat: 52.52, lng: 13.405 }); // Default to Berlin
    }
  };

  const handleSearch = () => {
    setMapKey(mapKey + 1); // force re-render
    console.log("Search button clicked");
  };

  return (
    <div>
      <div className="rightText">
        <p>
          There is more to experience in the city you are living in than only
          big companies! <br /> GreenShift helps you discover the future of
          retail in inner cities in which small,
          <br /> sustainable brands are part of a unique and equal shopping
          experience.
        </p>
      </div>
      <div className="map">
        <div className="searchbar">
          <input type="text" placeholder="Search..." />
          <select
            id="location"
            name="location"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="Berlin">Berlin</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Bremen">Bremen</option>
            <option value="London">London</option>
          </select>
          <select id="distance" name="distance">
            <option value="distance">5km</option>
            <option value="distance">10km</option>
            <option value="distance">15km</option>
            <option value="distance">20km</option>
          </select>
          <select id="priceRange" name="open right now">
            <option value="priceRange">Yes</option>
            <option value="priceRange">No</option>
          </select>
          <select id="category" name="category">
            <option value="art">Art</option>
            <option value="music">Literature</option>
            <option value="food">Pottery</option>
            <option value="other">Art Workshops</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="listDiv">
          <div className="list">
            <h3>Results</h3>
          </div>
          <div className="listMapDiv">
            <div style={{ width: "100%", height: "400px" }} className="mapDiv">
              <DynamicMap position={position} key={mapKey} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
