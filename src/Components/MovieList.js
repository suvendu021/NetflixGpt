import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (movies) {
    return (
      <div>
        <h2 className="text-white font-semibold text-xl">{title}</h2>
        <div className="flex overflow-x-scroll mt-4 ">
          <div className="flex items-center justify-center">
            {movies.map((item) => (
              <MovieCard
                key={item.id}
                poster={item.poster_path}
                movieId={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default MovieList;
