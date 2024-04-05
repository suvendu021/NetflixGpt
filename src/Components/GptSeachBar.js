import React, { useState } from "react";
import { SEARCHBAR_LANGUAGE } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { TMDB_OPTIONS } from "../utils/Constant";
import { addGptSearchMovie } from "../utils/GptSlice";
import ShimmerUi from "../utils/ShimmerUi";
import GPTsearchResult from "./GPTsearchResult";

const GptSeachBar = () => {
  const dispatch = useDispatch();
  const searchValue = useRef(null);
  const currentLang = useSelector((store) => store.lang.langPrefer);
  const [loading, setLoading] = useState(false);

  const language = SEARCHBAR_LANGUAGE.find(
    (lang) => lang.langId === currentLang
  );

  const fetchSearchMovie = async (movie) => {
    setLoading(true);
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(
      addGptSearchMovie({
        gptSearchMovieName: searchValue.current.value,
        gptSearchMovie: json.results,
      })
    );
    setLoading(false);
  };

  const handleSearch = () => {
    // console.log(searchValue.current.value);
    fetchSearchMovie(searchValue.current.value);
  };

  return (
    <>
      <div className="md:pt-[12%] pt-[30%] flex justify-center">
        <form
          className=" bg-black p-2 md:w-6/12 w-10/12 flex justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchValue}
            className="py-2 px-4 mx-2 w-9/12"
            type="text"
            placeholder={language?.value || "what do you want to watch"}
          />
          <button
            className=" bg-red-600 text-white mx-2 px-4 py-2"
            onClick={handleSearch}
          >
            {language?.searchValue || "search"}
          </button>
        </form>
      </div>
      {loading && <ShimmerUi />}
      {!loading && <GPTsearchResult />}
    </>
  );
};

export default GptSeachBar;
