import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryScreen = () => {
  const movies = useSelector((store) => store.movie);

  // console.log(movies.nowPlayingMovies);
  return (
    <div className=" bg-black m-0 p-0 w-screen">
      <div className="px-12 py-4 md:-mt-52 md:relative md:z-20">
        <MovieList
          title={"NowPlaying Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Top-Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"UpComing Movies"} movies={movies.upComingMovies} />
      </div>

      {/* 
    
    - trendind movieList
      - movie card * n

    - nowPlaying MovieList

    - different catagory movieList
    
     */}
    </div>
  );
};

export default SecondaryScreen;
