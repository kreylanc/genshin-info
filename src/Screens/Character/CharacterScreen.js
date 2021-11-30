import React, { useEffect, useState } from "react";
import CharacterRow from "./CharacterRow";
import RarityFilter from "./RarityFilter";
import VisionFilter from "./VisionFilter";
import WeaponFilter from "./WeaponFilter";
import { SearchIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { searchCharacter } from "../../features/searchSlice";

function CharacterScreen() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(searchCharacter(search));
  }, [search]);

  console.log(search);

  return (
    <div className="flex flex-col w-full lg:w-4/5 m-auto md:mt-10 px-7 py-5 bg-gray-750 text-gray-300 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold">Character List</h1>
      </div>
      <div className="text-xs md:text-sm lg:text-base mt-4 ">
        <div className="flex items-center bg-gray-light px-2 py-2 w-full md:w-80 text-gray-400 focus-within:text-gray-200">
          <SearchIcon className="h-5 text-current" />
          <input
            type="text"
            placeholder="Search Character..."
            className="outline-none border-none bg-transparent px-1 pl-2 py-1 focus:ring-0"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <h1 className="text-xl w-3/5 mt-3">Filter By:</h1>

        <div className="filter-container">
          <h2 className="font-semibold">Weapon</h2>
          <div className="flex flex-wrap md:ml-4">
            <WeaponFilter value="All" />
            <WeaponFilter value="Sword" />
            <WeaponFilter value="Claymore" />
            <WeaponFilter value="Polearm" />
            <WeaponFilter value="Bow" />
            <WeaponFilter value="Catalyst" />
          </div>
        </div>
        <div className="filter-container">
          <h2 className="font-semibold">Vision</h2>
          <div className="flex flex-wrap md:ml-4">
            <VisionFilter value="All" />
            <VisionFilter value="Anemo" />
            <VisionFilter value="Cryo" />
            <VisionFilter value="Electro" />
            <VisionFilter value="Pyro" />
            <VisionFilter value="Geo" />
            <VisionFilter value="Hydro" />
            <VisionFilter value="Dendro" />
          </div>
        </div>
        <div className="filter-container">
          <h2 className="font-semibold">Rarity</h2>
          <div className="flex flex-wrap md:ml-4">
            <RarityFilter value="All" />
            <RarityFilter value="4 Star" />
            <RarityFilter value="5 Star" />
          </div>
        </div>
      </div>

      <CharacterRow />
    </div>
  );
}

export default CharacterScreen;
