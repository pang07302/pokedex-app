import React from "react";
import search from "./../assets/search.svg";

interface SearchBarProps {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SearchBar({ clickHandler }: SearchBarProps) {
  return (
    <div className="border-1 rounded-xl w-[35%] h-11 flex drop-shadow-md">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search..."
          name="search"
          className="pt-2 pl-3 w-full h-full"
        />
      </div>
      <div className="bg-gray-300 w-10 pt-3 pl-3 flex-none rounded-r-xl">
        <button onClick={clickHandler} className="pointer-events-auto ">
          <img src={search} alt="search"></img>
        </button>
      </div>
    </div>
  );
}
