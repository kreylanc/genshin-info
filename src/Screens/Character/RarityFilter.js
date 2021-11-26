import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rarityFilter, selectRarity } from "../../features/filterSlice";

function RarityFilter({ value }) {
  const dispatch = useDispatch();
  const rarity = useSelector(selectRarity);

  const [active, setActive] = useState();

  const buttonActive = () => {
    if (value === "All") {
      dispatch(rarityFilter(""));
      setActive("");
    } else if (value === "4 Star") {
      dispatch(rarityFilter("4"));
      setActive("4");
    } else if (value === "5 Star") {
      dispatch(rarityFilter("5"));
      setActive("5");
    }
  };

  return (
    <div>
      <button
        className={
          active === rarity
            ? "  filter-btn text-white bg-blue-100"
            : "bg-gray-light filter-btn"
        }
        onClick={() => {
          buttonActive();
        }}
      >
        {value}
      </button>
    </div>
  );
}

export default RarityFilter;
