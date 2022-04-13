import { collectionList, diningFilters } from "../../../data/componentData";
import { dining } from "../../../data/dining";
import Collection from "../../common/Collection";
import ExploreSection from "../../common/ExploreSection";
import Filters from "../../common/Filters";
const diningList = dining;


export default function Dining() {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection
        restaurants={diningList}
        sectionName="Dine-Out Restaurants in Bangalore"
      />
    </div>
  );
}
