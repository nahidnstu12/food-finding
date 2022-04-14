import React from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { BiChevronRight } from "react-icons/bi";
import ImageOptimized from "./Image";

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Collection = ({ list }) => {
  return (
    <div className="bg-zomato-inactive">
      <div className="max-width pt-4 pb-10">
        <div className="heading">Collections</div>
        <div className="flex justify-between items-center mb-3">
          <div className="text-zomato-subtitle text-lg">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bengaluru, based on trends
          </div>
          <div className="text-zomato-primary flex items-center cursor-pointer">
            <div>All Collections in Bangalore </div>
            <BiChevronRight className=" absolute-center text-lg" />
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => (
            <div key={item.id}>
              <div className="h-80 w-64 mr-5 rounded-md z-20 relative cursor-pointer group">
              
                <ImageOptimized
                  className={"h-full w-full object-cover rounded-md"}
                  imgSrc={item.cover}
                  imgAlt={item.title}
                />
                <div className="gradient-bg"></div>
                <div className="absolute left-4 bottom-8 text-white text-lg font-medium group-hover:text-zomato-primary">
                  {item.title}
                </div>
                <div className="flex items-center text-white absolute left-4 bottom-3 group-hover:text-zomato-primary">
                  <div>{item.places}</div>
                  <BiChevronRight className="text-xl absolute-center items-center" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collection;
