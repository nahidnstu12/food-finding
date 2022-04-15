import React from "react";
import Slider from "react-slick";
import { deliveryItems } from "../../../data/componentData";
import NextArrow from "../../common/NextArrow";
import PrevArrow from "../../common/PrevArrow";

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function DelivaryCollection() {
  return (
    <div className="w-full bg-zomato-inactive py-10 px-0">
      <div className="max-width">
        <div className="heading">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => (
            <DeliveryItem item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

const DeliveryItem = ({ item }) => {
  return (
    <div>
      <div className="relative">
        <div
          className="h-40 w-[90%]  sm:h-56 md:w-64 bg-white collection-shadow rounded-lg hover:shadow-xl cursor-pointer  bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('${item.cover}')`,
          }}
        ></div>
        <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0  z-10 flex justify-center items-center  text-white font-semibold bg-gradient-to-t from-gray-700/60  h-40 w-40 xs:w-44  sm:h-56 sm:w-64"></div>
      </div>
      <div className="text-xl truncate mt-2 text-center">{item.title}</div>
    </div>
  );
};
