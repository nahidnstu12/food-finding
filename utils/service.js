export const getCorrectScreen = (tabs) => {
  switch (tabs) {
    case "Delivary":
      return <div>Delivary</div>;
    case "Dining":
      return <div>Dining</div>;
    case "NightLife":
      return <div>NightLifer</div>;
    default:
      return <div>Delivary</div>;
  }
};
