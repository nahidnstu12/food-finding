import React from 'react';
import Slider from "react-slick"
import { topBrandsList } from '../../../data/componentData';
import ImageOptimized from '../../common/Image';
import NextArrow from '../../common/NextArrow';
import PrevArrow from '../../common/PrevArrow';

const settings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};


export default function TopBrands() {
  return (
    <div className="max-width pt-7">
      <div className="heading">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => (
          <div key={brand.id}>
            <div className="h-28 w-28  md:h-36 md:w-36 rounded-lg bg-white collection-shadow border border-solid border-zomato-border hover:shadow-2xl transition">
              <ImageOptimized
                className={"rounded-lg h-full w-full object-cover"}
                imgAlt={brand.time}
                imgSrc={brand.cover}
              />
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
