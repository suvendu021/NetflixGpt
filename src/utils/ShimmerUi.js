import React from "react";

const ShimmerUi = () => {
  return (
    <div className="bg-black  p-4 mx-20 my-8 opacity-90">
      <button className="rounded-lg animate-pulse w-52 h-12 bg-gray-300"></button>
      <div className="flex">
        <div className="animate-pulse mt-4 mr-3 w-40 h-52 bg-gray-300 rounded-lg"></div>
        <div className="animate-pulse mt-4 mr-3 w-40 h-52 bg-gray-300 rounded-lg"></div>
        <div className="animate-pulse mt-4 mr-3 w-40 h-52 bg-gray-300 rounded-lg"></div>
        <div className="animate-pulse mt-4 mr-3 w-40 h-52 bg-gray-300 rounded-lg"></div>
        <div className="animate-pulse mt-4 mr-3 w-40 h-52 bg-gray-300 rounded-lg"></div>
        <div className="animate-pulse mt-4 mr-3 w-40 h-52 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ShimmerUi;
