import React from "react";
import shopsData from "./shops.json";

const ArtistsView = () => {
  return (
    <div>
      {shopsData.shops.map((shop, index) => (
        <div className="artistsDiv">
          <img
            src={shop.picture}
            alt={shop.name}
            style={{ maxWidth: "100%", maxHeight: "120px" }}
          />
          <h3>{shop.name}</h3>
          <p>{shop.description}</p>
          <p>
            <a href={shop.website} target="_blank" rel="noopener noreferrer">
              {shop.website}
            </a>
          </p>
          <p>{shop.funFact}</p>
        </div>
      ))}
    </div>
  );
};

export default ArtistsView;
