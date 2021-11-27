import React from "react";
import "./PriceCard.css";

const PriceCard = ({ item }) => {
  console.log(item);
  const { description, name, price, unit, imgUrl } = item;
  return (
    <div className='carousel-item'>
      <div
        className='rounded grey-text z-depth-4'
        style={{ padding: "50px", minHeight: "500px" }}
      >
        <img src={imgUrl} alt={name} className='responsive-img rounded' />
        <h4 className='text-darken-4 bold'>{name}</h4>
        <span className='bold'>Price: </span>
        <span>
          {price}/{unit}
        </span>
      </div>
    </div>
  );
};

export default PriceCard;
