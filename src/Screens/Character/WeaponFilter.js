import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weaponFilter, selectWeapon } from "../../features/filterSlice";

function WeaponFilter({ value }) {
  const dispatch = useDispatch();
  const weapon = useSelector(selectWeapon);

  const [active, setActive] = useState();

  const buttonActive = () => {
    if (value == "All") {
      dispatch(weaponFilter(""));
      setActive("");
    } else {
      dispatch(weaponFilter(value));
      setActive(value);
    }
  };

  return (
    <div>
      <button
        className={
          active === weapon
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

export default WeaponFilter;
