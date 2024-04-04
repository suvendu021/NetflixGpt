import { useEffect } from "react";
import { UPCOMING_MOVIES_API, TMDB_OPTIONS } from "../utils/Constant";
import { addUpComingMovies } from "../utils/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";

export const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movie.upComingMovies);

  useEffect(() => {
    if (upComingMovies === null) getUpComingMovies();
  }, []);

  const getUpComingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES_API, TMDB_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addUpComingMovies(json.results));
  };
};
