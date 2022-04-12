import { delivaryFilters } from "../../../data/componentData";
import Filters from "../../common/Filters";

export default function Delivary() {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={delivaryFilters} />
      </div>
    </div>
  );
}
