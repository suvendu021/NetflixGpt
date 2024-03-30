import { useEffect } from "react";
import { POPULAR_MOVIES_API, TMDB_OPTIONS } from "../utils/Constant";
import { addPopularMovies } from "../utils/MoviesSlice";
import { useDispatch } from "react-redux";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_API, TMDB_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json.results));
  };
};
