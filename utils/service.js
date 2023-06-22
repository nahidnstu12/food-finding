import Delivary from "../components/sections/delivary/Index";
import Dining from "../components/sections/dining/Index";
import NightLife from "../components/sections/nightlife/Index";
import {TABS} from "./constants";

export const getCorrectScreen = (tabs) => {
  switch (tabs) {
    case TABS.DELIVERY:
      return <Delivary />;
    case TABS.DINING_OUT:
      return <Dining />;
    case TABS.NIGHTLIFE:
      return <NightLife />;
    default:
      return <Delivary />;
  }
};
