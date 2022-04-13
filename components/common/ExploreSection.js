import React from "react";
import { AiOutlineStar } from "react-icons/ai";

export default function ExploreSection({ restaurants, sectionName }) {
  return (
    <div className="max-width pt-8">
      <div className="heading">{sectionName}</div>
      <div className="flex flex-wrap justify-between">
        {restaurants.map((restaurant, i) => (
          <ExploreCard restaurant={restaurant} i={i} />
        ))}
      </div>
    </div>
  );
}

const ExploreCard = ({ restaurant, i }) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg =
    restaurant?.info?.image?.url ?? restaurant?.info?.o2FeaturedImage?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;
  return (
    <div
      className={`mt-3 rounded-2xl border border-solid border-transparent ${
        i < 3 ? "mt-3" : ""
      }`}
    >
      <div className="h-60 w-[21rem] rounded-2xl relative">
        <img
          src={coverImg}
          className="h-full w-full object-cover rounded-2xl"
          alt={restaurant.info.name}
        />
        <div className="absolute right-3 bottom-3 bg-white/80 font-semibold text-xs pt-1 px-2 pb-1 rounded">
          {deliveryTime}
        </div>
        {proOff && (
          <div className="absolute left-0 bottom-10 bg-zomato-tagRed text-white text-sm px-2 py-[2px] rounded-r truncate font-medium">
            {proOff}
          </div>
        )}

        {goldOff && (
          <div className="absolute left-0 bottom-3 bg-zomato-tagRed text-white font-semibold text-sm px-2 rounded-r truncate absolute-center">
            {goldOff}
          </div>
        )}

        {discount && (
          <div className="absolute left-0 bottom-3 bg-zomato-tagBlue text-white font-semibold text-sm px-2 rounded-r truncate absolute-center">
            {discount}
          </div>
        )}
      </div>
      <div className="flex justify-between pt-2 pb-1">
        <div className="max-w-[200px] truncate text-lg font-semibold text-zomato-heading">
          {name}
        </div>
        {rating && (
          <div className="px-2 text-sm font-semibold text-white bg-zomato-tagGreen rounded-md h-6 absolute-center">
            {rating} <AiOutlineStar className="absolute-center ml-1" />
          </div>
        )}
      </div>
      <div className="flex justify-between pt-2 pb-1">
        {cuisines.length && (
          <div className="w-3/5 text-sm truncate">
            {cuisines.map((item, i) => (
              <span className="mr-1 text-zomato-inactiveText">
                {item}
                {i !== cuisines.length - 1 && ","}
              </span>
            ))}
          </div>
        )}
        {approxPrice && <div className="text-sm text-zomato-inactiveText">{approxPrice}</div>}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="h-px mt-2 mb-1 bg-zomato-border"></div>
          <div className="flex items-center min-w-full">
            <img
              src={bottomContainers[0]?.image?.url}
              alt={bottomContainers[0]?.text}
              style={{ height: "18px" }}
            />
            <div className="text-xs text-zomato-inactiveText truncate max-w-[200px] ml-2">{bottomContainers[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};
