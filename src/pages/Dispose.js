import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PriceCard from "../components/PriceCard/PriceCard";
import "./dispose.css";
import { disposeHistory, priceItems } from "./data";
import { DisposeForm, HistoryCard } from "../components";
import { useState } from "react";
import Modal from "@mui/material/Modal";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Dispose = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='container'>
      <h3>Today's Prices</h3>
      <Slider {...settings}>
        {priceItems.map((item) => (
          <PriceCard key={item.id} item={item} />
        ))}
      </Slider>
      <br />
      <br />
      <h3>Your Dispose History</h3>
      <Slider {...settings} slidesToShow={2}>
        {disposeHistory.map((item, index) => (
          <HistoryCard key={index} item={item} />
        ))}
      </Slider>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Current Requests</h3>

        <div
          style={{ color: "#22DB8A" }}
          onClick={handleOpen}
          className='btn white-text'
        >
          Add New Request
        </div>
      </div>
      <br />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <DisposeForm onClose={handleClose} onAdd={handleClose} />
      </Modal>
    </div>
  );
};

export default Dispose;
