import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTsearchResult = () => {
  const { gptSearchMovie, gptSearchMovieName } = useSelector(
    (store) => store.gpt
  );

  if (!gptSearchMovie) {
    return null;
  }
  return (
    <div>
      <div className="bg-black text-white  p-4 mx-5 md:mx-20 my-8 opacity-90">
        <MovieList title={gptSearchMovieName} movies={gptSearchMovie} />
      </div>
    </div>
  );
};

export default GPTsearchResult;
