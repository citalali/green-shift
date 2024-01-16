import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import heart from "./icon.png";
import shopsData from "./shops.json";

const DynamicMap = ({ position }) => {
  let greenIcon = L.icon({
    iconUrl: heart,
    iconRetinaUrl: heart,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
  });

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {shopsData.shops.map((shop, index) => (
          <Marker key={index} position={shop.position} icon={greenIcon}>
            <Popup>
              <div>
                <img
                  src={shop.picture}
                  alt={shop.name}
                  style={{ maxWidth: "100%" }}
                />
                <h3>{shop.name}</h3>
                <p>{shop.description}</p>
                <p>
                  <a
                    href={shop.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {shop.website}
                  </a>
                </p>
                <p>{shop.funFact}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default DynamicMap;
