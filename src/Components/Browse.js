import React from "react";
import Header from "./Header";
import { useGetNowPlayingMovies } from "../hooks/useGetNowPlayingMovies";
import MainScreen from "./MainScreen";
import SecondaryScreen from "./SecondaryScreen";

const Browse = () => {
  useGetNowPlayingMovies();
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
