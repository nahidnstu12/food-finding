import React from "react";

export default function Filters({ filterList }) {
  return (
    <>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap px-0 py-4 space-x-2">
        {filterList &&
          filterList.map((filter) => (
            <FilterItem filter={filter} key={filter.id} />
          ))}
      </div>
     
    </>
  );
}

const FilterItem = ({ filter }) => {
  return (
    <div className="ml-2  p-2 flex bg-white text-zomato-filter border border-solid border-zomato-whiteGray rounded-lg  mt-3 mb-0 text-sm hover:shadow hover:bg-zomato-primary/30 cursor-pointer ">
      {!filter.position && (
        <span className={`text-base absolute-center ${filter.icon ? "mr-2" : ""}`}>{filter?.icon}</span>
      )}

      <div className="">{filter.title}</div>

      {filter?.position === "right" && (
        <span className="text-base absolute-center ml-1">{filter?.icon}</span>
      )}
    </div>
  );
};
