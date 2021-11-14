import React, { useEffect, useState } from "react";
import CharacterRow from "./CharacterRow";
import FilterButton from "./FilterButton";

function CharacterScreen() {
  return (
    <div className="flex flex-col w-full lg:w-4/5 m-auto md:mt-10 px-7 py-5 bg-gray-750 text-white">
      <div>
        <h1 className="text-3xl font-bold">Character List</h1>
      </div>
      <div className="text-base md:text-lg lg:text-xl mt-4">
        <h1>Filter By</h1>
        <div className="flex flex-col md:flex-row md:items-center">
          <h2>Weapon</h2>
          <div className="flex md:ml-4">
            <FilterButton value="All" />
            <FilterButton value="Sword" />
            <FilterButton value="Claymore" />
            <FilterButton value="Polearm" />
            <FilterButton value="Bow" />
            <FilterButton value="Catalyst" />
          </div>
        </div>
      </div>

      <CharacterRow />
    </div>
  );
}

export default CharacterScreen;
