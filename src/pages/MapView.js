import React from "react";
import DynamicMap from "../components/DynamicMap";
import { useState } from "react";

const MapView = () => {
  const [selectedCity, setSelectedCity] = useState("Berlin");
  const [position, setPosition] = useState({ lat: 52.52, lng: 13.405 }); // Default to Berlin coordinates
  const [mapKey, setMapKey] = useState(1); // Add a key to force re-render

  const handleCityChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCity(selectedValue);

    // Update position based on the selected city (You need to define the coordinates for each city)
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
        setPosition({ lat: 52.52, lng: 13.405 }); // Default to Berlin coordinates
    }
  };

  const handleSearch = () => {
    setMapKey(mapKey + 1); // Force re-render
    // Handle the search logic if needed
    // You can update the map based on other search parameters
    console.log("Search button clicked");
  };

  return (
    <div>
      <div className="searchbar">
        {/* Add your search bar implementation here */}
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
        <select id="priceRange" name="priceRange">
          <option value="priceRange">€</option>
          <option value="priceRange">€€</option>
          <option value="priceRange">€€€</option>
          <option value="priceRange">€€€€</option>
        </select>
        <select id="category" name="category">
          <option value="art">Art</option>
          <option value="music">Music</option>
          <option value="food">Food</option>
          <option value="other">Other</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div style={{ width: "100%", height: "400px" }}>
        <DynamicMap position={position} key={mapKey} />
      </div>
    </div>
  );
};

export default MapView;
