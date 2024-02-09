import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import heart from "../content/jewlery.png";
import pottery from "../content/shirt.png";
import book from "../content/pottery.png";
import art from "../content/art.png";
import painting from "../content/painting.png";
import shopsData from "../data/shops.json";

const DynamicMap = ({ position }) => {
  const iconMap = {
    jewleryIcon: L.icon({
      iconUrl: heart,
      iconRetinaUrl: heart,
      iconAnchor: [5, 55],
      popupAnchor: [10, -44],
      iconSize: [30, 30],
    }),
    potteryIcon: L.icon({
      iconUrl: pottery,
      iconRetinaUrl: heart,
      iconAnchor: [5, 55],
      popupAnchor: [10, -44],
      iconSize: [30, 30],
    }),
    bookIcon: L.icon({
      iconUrl: book,
      iconRetinaUrl: heart,
      iconAnchor: [5, 55],
      popupAnchor: [10, -44],
      iconSize: [30, 30],
    }),
    artIcon: L.icon({
      iconUrl: art,
      iconRetinaUrl: heart,
      iconAnchor: [5, 55],
      popupAnchor: [10, -44],
      iconSize: [30, 30],
    }),
    paintingIcon: L.icon({
      iconUrl: painting,
      iconRetinaUrl: heart,
      iconAnchor: [5, 55],
      popupAnchor: [10, -44],
      iconSize: [30, 30],
    }),
  };

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
          <Marker
            key={index}
            position={shop.position}
            icon={iconMap[shop.icon]}
          >
            <Popup>
              <div>
                <img
                  src={shop.picture}
                  alt={shop.name}
                  style={{ maxWidth: "100%", maxHeight: "120px" }}
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
