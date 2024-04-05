import React from "react";
import { MOVIE_POSTER } from "../utils/Constant";
import { Link } from "react-router-dom";

const MovieCard = ({ poster, movieId }) => {
  return (
    poster && (
      <Link to={"/movieInfo/" + movieId}>
        <div className="pr-3 w-40">
          <img
            src={MOVIE_POSTER + poster}
            alt="movie_poster"
            className="rounded-lg hover:border-white hover:border-2 "
          />
        </div>
      </Link>
    )
  );
};

export default MovieCard;
