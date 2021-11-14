import React from "react";
import star from "../../star.png";

function CharDetailsMain({
  name,
  rarity,
  vision,
  weapon,
  nation,
  affiliation,
  birthday,
  description,
}) {
  return (
    <div>
      <h1 className=" text-3xl md:text-5xl font-bold">{name}</h1>
      <div className="mt-3 text-gray-300">
        <div className="flex space-x-2 items-center">
          <p className="font-semibold">Star Rank: </p>
          <p> {rarity}</p>
          <img src={star} alt="star" className="h-5 " />
        </div>
        <h2>Vision: {vision} </h2>
        <h2>Weapon: {weapon} </h2>
        <h2>Nation: {nation} </h2>
        <h2>Affiliation: {affiliation}</h2>
        <h2>Birthday: {birthday}</h2>
        <h2 className="md:w-9/12 mt-3">Description: {description}</h2>
      </div>
    </div>
  );
}

export default CharDetailsMain;
