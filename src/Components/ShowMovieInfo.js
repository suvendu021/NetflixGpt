import React from "react";
import MovieInfo from "./MovieInfo";
import { useParams } from "react-router-dom";
import Header from "./Header";

const ShowMovieInfo = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <div>
      <MovieInfo movieId={movieId} />
    </div>
  );
};

export default ShowMovieInfo;
