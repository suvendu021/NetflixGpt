import React from "react";
import Header from "./Header";
import { useGetNowPlayingMovies } from "../hooks/useGetNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopratedMovies } from "../hooks/useTopratedMovies";
import { useUpComingMovies } from "../hooks/useUpComingmovies";
import MainScreen from "./MainScreen";
import SecondaryScreen from "./SecondaryScreen";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const isSearchGptValue = useSelector((store) => store.gpt.gptSearchValue);
  useGetNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpComingMovies();

  return (
    <div className="m-0 p-0">
      <Header />
      {isSearchGptValue ? (
        <GptSearchPage />
      ) : (
        <div>
          <MainScreen />
          <SecondaryScreen />
        </div>
      )}

      {/*
        - main screen
          - trailer video
          - trailer title with description
        - secondary screen
          - movies list
      */}
    </div>
  );
};

export default Browse;
