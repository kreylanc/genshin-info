import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  weaponFilter,
  visionFilter,
  rarityFilter,
  selectWeapon,
  selectVision,
  selectRarity,
} from "../../features/filterSlice";

function FilterButton({ value }) {
  const dispatch = useDispatch();
  const weapon = useSelector(selectWeapon);
  const vision = useSelector(selectVision);
  const rarity = useSelector(selectRarity);

  return (
    <div>
      <button className="bg-gray-light p-1 py-2 md:py-3 md:px-4 hover:bg-blue-100 rounded-sm transition-colors duration-200 focus:bg-blue-100">
        {value}
      </button>
    </div>
  );
}

export default FilterButton;
