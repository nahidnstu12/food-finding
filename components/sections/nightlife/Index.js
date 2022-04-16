import { collectionNightLifeList, nightFilters } from "../../../data/componentData";
import { nightLife } from "../../../data/nightLife";
import Collection from "../../common/Collection";
import ExploreSection from "../../common/ExploreSection";
import Filters from "../../common/Filters";

const nightLifeList = nightLife;
export default function NightLife() {
  return (
    <div>
      <Collection list={collectionNightLifeList} />
      <div className="max-width">
        <Filters filterList={nightFilters} />
      </div>
      <ExploreSection
        restaurants={nightLifeList}
        sectionName="Nightlife Restaurants in Bangalore"
      />
    </div>
  );
}
