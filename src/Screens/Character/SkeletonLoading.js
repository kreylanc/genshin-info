import React from "react";

function SkeletonLoading({ type }) {
  const counter = 6;
  const RowSkeleton = () => (
    <div>
      <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-4">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 h-28 py-1">
            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
            <div className="h-4 bg-gray-400 rounded w-2/6"></div>
          </div>
          <div className=" bg-gray-400 h-28 w-28"></div>
        </div>
      </div>
    </div>
  );

  if (type === "row") {
    return Array(counter).fill(<RowSkeleton />);
  }
}

export default SkeletonLoading;
