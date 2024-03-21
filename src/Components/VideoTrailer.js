import React from "react";
import { useGetVideoResponse } from "../hooks/useGetVideoResponse";
import { useSelector } from "react-redux";

const VideoTrailer = ({ movieId }) => {
  const trailer = useSelector((store) => store.movie.movieTrailer);
  //   console.log(trailer);
  useGetVideoResponse(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; &autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
