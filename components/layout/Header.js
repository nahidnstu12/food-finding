import React from "react";
import { GoLocation, GoSearch } from "react-icons/go";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function Header() {
  return (
    <div className="flex h-16 w-full items-center mb-3 max-width">
      <img src="/logo.png" className="mr-6 h-16 w-16 " />
      {/* header right */}
      <div className="flex flex-1 justify-between items-center h-16">
        {/* search container */}
        <div className="flex items-center rounded-lg h-14 w-9/12 border border-solid  border-zomato-border box-shadow">
          {/* location */}
          <div className="flex flex-1 justify-between py-0 px-3">
            <div className="flex text-zomato-whiteGray">
              <GoLocation className="mr-2 text-xl text-zomato-primary" />
              <div>Noakhali</div>
            </div>
            <AiOutlineCaretDown />
          </div>
          <div className="h-5 border border-zomato-whiteGray border-solid"></div>
          {/* search */}
          <div className="flex flex-[2]">
            <GoSearch className="text-xl text-zomato-gray mx-3" />
            <input
              className="border-none outline-none w-3/5"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
        {/* profile container*/}
        <div className="flex justify-between w-[12%] items-center">
          <img
            src="/user.png"
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-base font-semibold">Nahid</span>
          <BiChevronDown className="text-xl"/>
        </div>
      </div>
    </div>
  );
}
