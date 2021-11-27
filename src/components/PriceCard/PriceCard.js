import React from "react";
import "./PriceCard.css";

const PriceCard = ({ item }) => {
  const { description, name, price, unit, imgUrl } = item;
  return (
    <div
      className='z-depth-3 container grey-text'
      style={{
        padding: "10px",
        borderRadius: "10px",
        minHeight: "225px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F3F5F7",
        marginBottom: "10px",
      }}
    >
      <img
        style={{ borderRadius: "10px" }}
        src={imgUrl}
        alt={name}
        className='responsive-img'
      />
      <h4 className='text-darken-2 grey-text'>{name}</h4>
      <span>
        <b className='bold'>Price: </b>
        <span>
          {price}/{unit}
        </span>
      </span>
      {description && <p className=''>{description} </p>}
    </div>
  );
};

export default PriceCard;
