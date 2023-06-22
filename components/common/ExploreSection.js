import {useEffect, useState} from "react";
import { AiOutlineStar } from "react-icons/ai";
import ImageOptimized from "./Image";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingItems } from "./LoadingItems";
import {restaurants as restaurantsLists} from "../../data/restaurants";
import {dining} from "../../data/dining";
import {nightLife} from "../../data/nightLife";


const PAGE_LIMIT = 6;
const SET_PAGE = 2;
const restaurantsMap = {
  dining: dining,
  restaurants: restaurantsLists,
  nightlife: nightLife,
};
export default function ExploreSection({ sectionName, node }) {
  const [page, setPage] = useState(SET_PAGE);
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState(restaurantsLists);
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);

  useEffect(() => {

    const selectedRestaurants = restaurantsMap[node] || restaurantsLists;
    setRestaurants(selectedRestaurants);
    const firstLoadData = selectedRestaurants?.slice(0, PAGE_LIMIT);
    setDisplayedRestaurants(firstLoadData);

  }, []);


  const fetchRestaurants = () => {
    // Simulate API call with a delay of 1000 milliseconds
    setLoading(true);
    setTimeout(() => {
      const perPage = PAGE_LIMIT;
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;

      const newDisplayedRestaurants = restaurants.slice(startIndex, endIndex);

      setDisplayedRestaurants((prevDisplayedRestaurants) => [
        ...prevDisplayedRestaurants,
        ...newDisplayedRestaurants,
      ]);
      setPage((prevPage) => prevPage + 1);
    }, 1000);
    setLoading(false)
  };

  console.log("newDisplayedRestaurants", restaurants, displayedRestaurants)

  return (
    <div className="max-width pt-8">
      <div className="heading">{sectionName}</div>
      {displayedRestaurants.length > 0 && (
        <InfiniteScroll
          dataLength={displayedRestaurants.length}
          next={()=>fetchRestaurants()}
          hasMore={displayedRestaurants.length < restaurants.length }
          loader={<LoadingItems />}
        >
          {/* flex flex-wrap justify-between w-52 max-w-[208px] */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            {displayedRestaurants.length > 0 &&
                displayedRestaurants?.map((restaurant, i) => (
                <ExploreCard restaurant={restaurant} i={i} key={i} />
              ))}
          </div>
        </InfiniteScroll>
      )}

      {/* </div> */}
      {!loading && displayedRestaurants.length === 0 && <div>No data found!</div>}
      {/*{error && <div>There was an error!</div>}*/}
      {loading && <div>Loading...</div>}
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
      className={`mt-3 mb-2 md:mb-8 rounded-2xl border border-solid border-transparent ${
        i < 3 ? "mt-3" : ""
      }`}
    >
      <div className="h-48  md:h-60 md:w-[21rem] rounded-2xl relative  hover:scale-95 transition-all duration-200 ease-linear">
        <ImageOptimized
          className={"h-full w-full object-cover rounded-2xl"}
          imgSrc={coverImg}
          imgAlt={restaurant?.info?.name}
        />
        <div className="absolute right-3 bottom-3 bg-white/60 font-semibold text-xs pt-1 px-2 pb-1 rounded">
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
      <div className="md:w-[21rem]">
        <div className="flex items-center justify-between pt-2 pb-1">
          <div className="w-2/5 md:max-w-[200px] truncate text-lg font-semibold text-zomato-heading">
            {name}
          </div>
          {rating && (
            <div className="px-2 text-sm font-semibold text-white bg-zomato-tagGreen rounded-md h-6 absolute-center">
              {rating} <AiOutlineStar className="absolute-center ml-1" />
            </div>
          )}
        </div>
        <div className=" md:flexflex flex-col md:flex-row justify-between pt-2 pb-1">
          {cuisines?.length && (
            <div className=" w-full md:w-3/5 text-sm truncate">
              {cuisines.map((item, i) => (
                <span className="mr-1 text-zomato-inactiveText" key={i}>
                  {item}
                  {i !== cuisines?.length - 1 && ","}
                </span>
              ))}
            </div>
          )}
          {approxPrice && (
            <div className="text-sm text-zomato-inactiveText">
              {approxPrice}
            </div>
          )}
        </div>
        {bottomContainers?.length > 0 && (
          <div>
            <div className="h-px mt-2 mb-1 bg-zomato-border"></div>
            <div className="sm:flex  items-center min-w-full">
              <div className="h-5 w-5 hidden md:block">
                <img
                  src={bottomContainers[0]?.image?.url}
                  alt={bottomContainers[0]?.text}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="text-xs text-zomato-inactiveText truncate max-w-[192px] md:max-w-[200px] md:ml-2 break-words">
                {bottomContainers[0]?.text}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
