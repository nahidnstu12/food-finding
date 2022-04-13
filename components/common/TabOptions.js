import { tabs } from "../../data/componentData";

export default function TabOptions({ activeTab, setActiveTab }) {
  return (
    <div className="tab-options pt-10">
      <div className="flex max-width">
        {tabs.map((tab) => (
          <div
            className={`mr-6 py-3 px-5 absolute-center cursor-pointer transition duration-500 ease-linear ${
              activeTab === tab.name &&
              "border-b-2 border-solid border-zomato-primary"
            }`}
            onClick={() => setActiveTab(tab.name)}
            key={tab.id}
          >
            <div
              className="h-16 w-16 rounded-full bg-zomato-inactive absolute-center"
              style={{
                backgroundColor: `${
                  activeTab === tab.name ? tab.backdrop : ""
                }`,
              }}
            >
              <img
                src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
                className="h-8 w-8"
                alt={tab.name}
              />
            </div>
            <div
              className={`text-xl font-normal ml-3 ${
                activeTab === tab.name && "text-zomato-primary"
              }`}
            >
              {tab.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
