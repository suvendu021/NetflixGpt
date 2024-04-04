import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/MoviesSlice";

export const useGetVideoResponse = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movie.movieTrailer);
  useEffect(() => {
    if (!movieTrailer) getMovieTrailer();
  }, []);
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      TMDB_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    const trailers = json.results.filter((item) => item.type === "Trailer");
    const mainTrailer = trailers.length ? trailers[0] : json.results[0];
    // console.log(mainTrailer);
    dispatch(addMovieTrailer(mainTrailer));
  };
};
