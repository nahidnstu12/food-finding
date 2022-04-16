import { delivaryFilters } from "../../../data/componentData";
import { restaurants } from "../../../data/restaurants";
import ExploreSection from "../../common/ExploreSection";
import Filters from "../../common/Filters";
import DelivaryCollection from "./DelivaryCollection";
import TopBrands from "./TopBrands";

const restaurantsList = restaurants.slice(0,8);
export default function Delivary() {
  return (
    <div>
      <div className="max-width " style={{padding:"0.5rem"}}>
        <Filters filterList={delivaryFilters} />
      </div>
      <DelivaryCollection />
      <TopBrands />
     
      <ExploreSection
        restaurants={restaurantsList}
        sectionName="Delivery Restaurants in Bangalore"
      />
    </div>
  );
}
