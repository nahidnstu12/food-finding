import Delivary from "../components/sections/delivary/Index";
import Dining from "../components/sections/dining/Index";
import NightLife from "../components/sections/nightlife/Index";

export const getCorrectScreen = (tabs) => {
  switch (tabs) {
    case "Delivary":
      return <Delivary />;
    case "Dining":
      return <Dining />;
    case "NightLife":
      return <NightLife />;
    default:
      return <Delivary />;
  }
};
