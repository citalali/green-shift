import React, { useState } from "react";
import shopsData from "../data/shops.json";
import "../styles/artistsView.css";

const ArtistsView = ({ handleArtistViewClick }) => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    Array(shopsData.shops.length).fill(0)
  );

  const handleNextImg = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        (newIndexes[index] + 1) % shopsData.shops[index].productImgs.length;
      return newIndexes;
    });
  };

  const handlePrevImg = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        newIndexes[index] === 0
          ? shopsData.shops[index].productImgs.length - 1
          : newIndexes[index] - 1;
      return newIndexes;
    });
  };

  return (
    <div>
      {shopsData.shops.map((shop, index) => (
        <div
          key={index}
          className="artistsDiv"
          onClick={() => {
            handleArtistViewClick(shop.position);
          }}
        >
          <div className="leftInfo">
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
          <div className="rightImg">
            <button
              onClick={() => {
                handlePrevImg(index);
              }}
            >
              &lt;
            </button>
            <img
              src={shop.productImgs[currentImageIndexes[index]]}
              alt={shop.name}
              className="productImg"
            />
            <button
              onClick={() => {
                handleNextImg(index);
              }}
            >
              &gt;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtistsView;
