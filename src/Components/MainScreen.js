import React from "react";
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";
import { useSelector } from "react-redux";

const MainScreen = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  console.log(movies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="w-screen relative overflow-hidden">
      <VideoTitle title={original_title} description={overview} />
      <VideoTrailer movieId={id} />
    </div>
  );
};

export default MainScreen;
