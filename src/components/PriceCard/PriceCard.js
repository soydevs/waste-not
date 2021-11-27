import React from "react";
import "./PriceCard.css";

const PriceCard = ({ item }) => {
  console.log(item);
  const { description, name, price, unit, imgUrl } = item;
  return (
      <div
        className='rounded grey-text z-depth-4'
        style={{ marginRight: "25px"}}
      >
        <img src={imgUrl} alt={name} className='responsive-img' />
        <h4 className='text-darken-4 bold'>{name}</h4>
        <span className='bold'>Price: </span>
        <span>
          {price}/{unit}
        </span>
    </div>
  );
};

export default PriceCard;
