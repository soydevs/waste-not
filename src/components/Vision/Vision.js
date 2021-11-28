import React from "react";
import Wave from "react-wavify";
import leafSvg from "../../assets/svg/leaf.svg";
import "./Vision.css";

function Vision() {
  return (
    <>
      <div className='vision' id='vision' style={{ backgroundColord: "green" }}>
        <Wave
          fill='#22DB8A'
          paused={false}
          options={{
            height: 25,
            amplitude: 70,
            speed: 0.15,
            points: 3,
          }}
          style={{ marginBottom: "-10px", display: "block" }}
        />
        <div
          style={{
            backgroundColor: "#22DB8A",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              alignSelf: "flex-start",
              marginLeft: "50px",
              color: "#f1f1f1",
            }}
          >
            OUR VISION
          </h1>
          <img style={{}} src={leafSvg} alt='' />
        </div>
        <div className='vision__container'>
          <div>
            <h3>Collection</h3>
            <p>
            Waste collection units to be built within a 25km radius, where segregated waste can be dumped by volunteers
            </p>
          </div>
          <div>
            <h3>Marketplace</h3>
            <p>
            Virtual marketplace where dumped scrap metal and other electronics can be bought at minimal prices from the app
            </p>
          </div>
          <div>
            <h3>Portal</h3>
            <p>
            Portal to buy decompost tools and equipment (for consumers).
Portal to sell compost, organic materials (for sellers).

            </p>
          </div>
          <div>
            <h3>Buy/Sell</h3>
            <p>
            Dedicated page for buying and selling clean plastic where the house-owners can alert and volunteers can collect them.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vision;
