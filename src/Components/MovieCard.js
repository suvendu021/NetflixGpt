import React from "react";
import { MOVIE_POSTER } from "../utils/Constant";

const MovieCard = ({ poster }) => {
  return (
    <div className="pr-3 w-32 hover:w-40">
      <img
        src={MOVIE_POSTER + poster}
        alt="movie_poster"
        className="rounded-lg  hover:border-white hover:border-2"
      />
    </div>
  );
};

export default MovieCard;
