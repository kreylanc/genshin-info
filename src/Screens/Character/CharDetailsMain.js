import React from "react";

function CharDetailsMain({ title, content, image }) {
  return (
    <div className=" ">
      <div className="flex space-x-2 items-center">
        <p className="font-semibold">{title}: </p>
        <p> {content}</p>
        {image != null ? <img src={image} alt="star" className="h-5 " /> : ""}
      </div>
    </div>
  );
}

export default CharDetailsMain;
