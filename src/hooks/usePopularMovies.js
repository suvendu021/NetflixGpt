import { useEffect } from "react";
import { POPULAR_MOVIES_API, TMDB_OPTIONS } from "../utils/Constant";
import { addPopularMovies } from "../utils/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movie.popularMovies);

  useEffect(() => {
    if (popularMovies === null) getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_API, TMDB_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json.results));
  };
};
