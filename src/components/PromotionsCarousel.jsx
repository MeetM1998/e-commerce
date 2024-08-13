import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Images1 =
  "https://cdn.grabon.in/gograbon/images/web-images/uploads/1621488513434/today-electronics-offers.jpg";
const Images2 =
  "https://www.shutterstock.com/image-vector/buy-one-get-free-online-600nw-2461358975.jpg";
const Images3 =
  "https://img.paisawapas.com/ovz3vew9pw/2023/08/03124342/amazon-deal-13.jpg";

const PromotionsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };

  return (
    <Slider {...settings} className="my-8">
      <div className="relative">
        <img
          src={Images1}
          alt="Promotion 1"
          className="w-full h-72 md:h-80 lg:h-96"
        />
      </div>
      <div className="relative">
        <img
          src={Images2}
          alt="Promotion 2"
          className="w-full h-72 md:h-80 lg:h-96"
        />
      </div>
      <div className="relative">
        <img
          src={Images3}
          alt="Promotion 3"
          className="w-full h-72 md:h-80 lg:h-96"
        />
      </div>
    </Slider>
  );
};

export default PromotionsCarousel;
