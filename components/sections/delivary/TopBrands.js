import React from 'react';
import Slider from "react-slick"
import { topBrandsList } from '../../../data/componentData';
import ImageOptimized from '../../common/Image';
import NextArrow from '../../common/NextArrow';
import PrevArrow from '../../common/PrevArrow';

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function TopBrands() {
  return (
    <div className="max-width pt-7">
      <div className="heading">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => (
          <div key={brand.id}>
            <div className="h-36 w-36 rounded-lg bg-white collection-shadow border border-solid border-zomato-border hover:shadow-2xl transition">
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
