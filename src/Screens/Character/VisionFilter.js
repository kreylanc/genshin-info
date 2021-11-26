import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { visionFilter, selectVision } from "../../features/filterSlice";

function VisionFilter({ value }) {
  const dispatch = useDispatch();
  const vision = useSelector(selectVision);

  const [active, setActive] = useState();

  const buttonActive = () => {
    if (value == "All") {
      dispatch(visionFilter(""));
      setActive("");
    } else {
      dispatch(visionFilter(value));
      setActive(value);
    }
  };

  return (
    <div className="">
      <button
        className={
          active === vision
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

export default VisionFilter;
