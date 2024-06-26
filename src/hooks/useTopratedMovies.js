import { useEffect } from "react";
import { TOP_RATED_MOVIES_API, TMDB_OPTIONS } from "../utils/Constant";
import { addTopRatedMovies } from "../utils/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";

export const useTopratedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);

  useEffect(() => {
    if (topRatedMovies === null) getTopratedMovies();
  }, []);

  const getTopratedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API, TMDB_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addTopRatedMovies(json.results));
  };
};
