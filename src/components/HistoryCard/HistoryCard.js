import React from "react";

const HistoryCard = ({ item }) => {
  const { itemName, unit, quantity, price, createdAt, totalPrice, imgUrl } =
    item;
  return (
    <div
      className='z-depth-3 container grey-text'
      style={{
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
        backgroundColor: "#F3F5F7",
        justifyContent: "center",
        alignItems: "center",
        width: "30vw",
        marginBottom: "20px",
      }}
    >
      <div>
        <img
          style={{ borderRadius: "10px", marginRight: "25px" }}
          src={imgUrl}
          alt={itemName}
          height='150px'
          width='150px'
        />
      </div>
      <div>
        <h4 className='text-darken-2 grey-text'>{itemName}</h4>
        <p>
          <b>Price: </b>
          {price}/{unit}
        </p>
        <p>
          <b>Quantity: </b>
          {quantity}
          {unit}
        </p>
        <p>
          <b>Total Price: </b>
          {totalPrice}Rs
        </p>
        <p>
          <b>Created On </b>
          {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default HistoryCard;
