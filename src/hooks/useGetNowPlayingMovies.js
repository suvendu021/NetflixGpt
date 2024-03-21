/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { TMBD_NOWPLAYING_MOVIES_API, TMDB_OPTIONS } from "../utils/Constant";
import { addNowPlayingMovies } from "../utils/MoviesSlice";
import { useDispatch } from "react-redux";

export const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(TMBD_NOWPLAYING_MOVIES_API, TMDB_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };
};
