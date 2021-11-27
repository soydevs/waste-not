import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PriceCard from "../components/PriceCard/PriceCard";
import "./dispose.css";
import { disposeHistory, priceItems } from "./data";
import { HistoryCard } from "../components";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
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
  return (
    <div className='container'>
      <h3>Today's Prices</h3>
      <Slider {...settings}>
        {priceItems.map((item) => (
          <PriceCard key={item.id} item={item} />
        ))}
      </Slider>
      <h3>Your Dispose History</h3>
      <Slider {...settings} slidesToShow={2}>
        {disposeHistory.map((item, index) => (
          <HistoryCard key={index} item={item} />
        ))}
      </Slider>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Dispose;
