import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[20%] px-12 text-white absolute w-screen aspect-video bg-gradient-to-r from-black ">
      <h3 className="font-bold 2xl md:text-6xl">{title}</h3>
      <p className="pt-2 w-6/12 line-clamp-2 md:w-2/4 text-xs md:text-sm">
        {description}
      </p>
      <div className="pt-2">
        <button className="py-2 px-4 rounded-lg bg-white  text-black hover:bg-opacity-50">
          Play
        </button>
        <button className="py-2 px-4 ml-2 rounded-lg bg-white bg-opacity-20 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
