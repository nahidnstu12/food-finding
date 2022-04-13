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
};

export default function DelivaryCollection() {
  return (
    <div className="w-full bg-zomato-inactive py-10 px-0">
      <div className="max-width">
        <div className="heading">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => (
            <DeliveryItem item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

const DeliveryItem = ({ item }) => {
  return (
    <div>
      <div className="h-56 w-64 bg-white collection-shadow rounded-lg">
        <img
          src={item.cover}
          className="h-full w-full object-cover rounded-lg"
          alt={item.title}
        />
      </div>
      <div className="text-xl truncate mt-2 ">{item.title}</div>
    </div>
  );
};
