import React from "react";
import DynamicMap from "../components/DynamicMap";
import { useState } from "react";
import "../styles/map.css";
import ArtistsView from "../components/ArtistsView";

const MapView = () => {
  const [selectedCity, setSelectedCity] = useState("Berlin");
  const [position, setPosition] = useState({ lat: 52.52, lng: 13.405 }); // Default to Berlin coordinates
  const [mapKey, setMapKey] = useState(1); // Add a key to force re-render
  const [isShopOpen, setIsShopOpen] = useState(false);

  const handleSwitchChange = () => {
    setIsShopOpen(!isShopOpen);
  };

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
    setMapKey(mapKey + 1);
    console.log("Search button clicked");
  };

  const handleArtistViewClick = (newPosition) => {
    if (newPosition === position) {
      return;
    }
    setPosition(newPosition);
    setMapKey(mapKey + 1);
  };

  return (
    <div>
      <div className="map">
        <div className="searchbar">
          <input type="text" placeholder="Search..." />
          <label htmlFor="location"></label>
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
          <label htmlFor="distance"></label>
          <select id="distance" name="distance">
            <option value="distance">5km</option>
            <option value="distance">10km</option>
            <option value="distance">15km</option>
            <option value="distance">20km</option>
          </select>

          <label htmlFor="isOpenSwitch"></label>
          <div className="switch-container">
            <input
              type="checkbox"
              id="isOpenSwitch"
              checked={isShopOpen}
              onChange={handleSwitchChange}
            />
            <span className="switch"></span>
          </div>

          <label htmlFor="category"></label>
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
            <ArtistsView handleArtistViewClick={handleArtistViewClick} />
          </div>
          <div className="listMapDiv">
            <div className="mapDiv">
              <DynamicMap position={position} key={mapKey} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
