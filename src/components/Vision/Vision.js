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
            <h3>Discover</h3>
            <p>
              changemakers and get inspired by their powerful intervention
              models
            </p>
          </div>
          <div>
            <h3>Discover</h3>
            <p>
              changemakers and get inspired by their powerful intervention
              models
            </p>
          </div>
          <div>
            <h3>Discover</h3>
            <p>
              changemakers and get inspired by their powerful intervention
              models
            </p>
          </div>
          <div>
            <h3>Discover</h3>
            <p>
              changemakers and get inspired by their powerful intervention
              models
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vision;
