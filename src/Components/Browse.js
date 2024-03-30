import React from "react";
import Header from "./Header";
import { useGetNowPlayingMovies } from "../hooks/useGetNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopratedMovies } from "../hooks/useTopratedMovies";
import { useUpComingMovies } from "../hooks/useUpComingmovies";
import MainScreen from "./MainScreen";
import SecondaryScreen from "./SecondaryScreen";

const Browse = () => {
  useGetNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpComingMovies();

  return (
    <div className="m-0 p-0">
      <Header />

      {/*
        - main screen
          - trailer video
          - trailer title with description
        - secondary screen
          - movies list
      */}
      <MainScreen />
      <SecondaryScreen />
    </div>
  );
};

export default Browse;
