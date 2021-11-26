import React from "react";

function CharDetailsSub({ title, info, extraInfo, linkId }) {
  return (
    <div id={linkId}>
      <h2 className="mt-10 text-2xl md:text-3xl font-bold tracking-wide text-white">
        {title}
      </h2>
      <div className="bg-gray-light rounded grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-10 px-4 py-3 item-center mt-3 text-lg">
        {info.map((element, i) => (
          <div className=" flex flex-col px-4 py-3">
            <img
              src={extraInfo[i]}
              alt={element.name}
              className="h-20 object-contain"
            />
            <h2 className=" font-bold text-green-100 text-xl text-center ">
              {element.name}
            </h2>
            <h3 className="mb-3 text-center text-gray-100 font-semibold">
              {element.unlock}
            </h3>

            {/* {console.log(element.description)} */}
            <p className="whitespace-pre-line mt-2 text-gray-300">
              {element.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharDetailsSub;
