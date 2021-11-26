import React, { useEffect, useState } from "react";
import CharacterRow from "./CharacterRow";
import RarityFilter from "./RarityFilter";
import VisionFilter from "./VisionFilter";
import WeaponFilter from "./WeaponFilter";

function CharacterScreen() {
  return (
    <div className="flex flex-col w-full lg:w-4/5 m-auto md:mt-10 px-7 py-5 bg-gray-750 text-gray-300 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold">Character List</h1>
      </div>
      <div className="text-base md:text-lg lg:text-xl mt-4">
        <h1 className="text-xl">Filter By</h1>
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
          <h2>Vision</h2>
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
          <h2>Rarity</h2>
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
