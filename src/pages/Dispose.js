// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import PriceCard from "../components/PriceCard/PriceCard";

const priceItems = [
  {
    id: 1,
    name: "Steel",
    unit: "kg",
    price: 150,
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.302Vd5w0MfnJcue9uSdySgHaE6%26pid%3DApi&f=1",
    description:
      "Steel is the best. Did you hear that? Steel really is the best. Don't believe me? Well say what, Steel isss the best",
  },
  {
    id: 2,
    name: "Paper",
    unit: "kg",
    price: 150,
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5Bca57wR3S5lwhCJcE60RAHaF9%26pid%3DApi%26h%3D160&f=1",
    description:
      "Paper is the best. Did you hear that? Paper really is the best. Don't believe me? Well say what, Paper isss the best",
  },
  {
    id: 3,
    name: "Plastic",
    unit: "kg",
    price: 150,
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9oVqnxnxBjcO2dTYIjJZsAHaEK%26pid%3DApi%26h%3D160&f=1",
    description:
      "Steel is the worst. Did you hear that? Plastic really is the best. Don't believe me? Well say what, Plastic isss the best",
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};

const Dispose = () => {
  // useEffect(() => {
  //   var elems = document.querySelectorAll(".carousel");
  //   M.Carousel.init(elems, {
  //     indicators: true,
  //     noWrap: true,
  //     shift: 20,
  //     fullWidth: false,
  //     dist: 10,

  //   });
  // }, []);
  return (
    <div className='container'>
      <h3>Today's Prices</h3>
      {/* <div class='carousel'>
          <a class='carousel-item' href='#three!'>
            <img src='https://lorempixel.com/250/250/nature/3' />
          </a>
          <a class='carousel-item' href='#four!'>
            <img src='https://lorempixel.com/250/250/nature/4' />
          </a> */}

      {/* {priceItems.map((item) => (
            <PriceCard key={item.id} item={item} />
          ))} */}
      {/* </div> */}

      {/* <Slider {...settings}>
          {priceItems.map((item) => (
            <PriceCard key={item.id} item={item} />
          ))}
        </Slider> */}
      <div className='row'>
        {priceItems.map((item) => (
          <div className='col s12. m4'>
            <PriceCard key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dispose;
