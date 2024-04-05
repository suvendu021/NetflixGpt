import React, { useEffect, useState } from "react";
import { TMDB_OPTIONS } from "../utils/Constant";
import LoadingPage from "./LoadingPage";

const MovieInfo = ({ movieId }) => {
  const [poster, setPoster] = useState(null);
  const [bgPoster, setBgPoster] = useState(null);
  const [movieTitle, setMovieTitle] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [genre, setGenre] = useState(null);
  const [tagLine, setTagLine] = useState(null);
  const [overView, setOverView] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      TMDB_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const posterURL = json?.poster_path;
    const backgroundPosterURL = json?.backdrop_path;
    const movieTitle = json?.original_title;
    const releaseDate = json?.release_date;
    const genre = json?.genres;
    const tagLine = json?.tagline;
    const overView = json?.overview;
    setPoster(posterURL);
    setBgPoster(backgroundPosterURL);
    setGenre(genre);
    setOverView(overView);
    setReleaseDate(releaseDate);
    setMovieTitle(movieTitle);
    setTagLine(tagLine);

    setLoading(false);
  };

  if (loading) return <LoadingPage />;
  if (!poster || !bgPoster) return null;

  return (
    <div>
      <div>
        <img
          className="absolute -z-10 w-full h-full inset-0 object-cover "
          src={"https://image.tmdb.org/t/p/w500" + bgPoster}
          alt="bg-poster"
        />
        <div className="bg-black inset-0 absolute opacity-60  -z-10"></div>
      </div>
      <div className="md:flex ">
        <img
          className=" md:w-1/5 w-1/3 mt-[8%] md:ml-20 mx-auto  rounded-2xl"
          src={"https://image.tmdb.org/t/p/w500" + poster}
          alt="poster"
        />
        <div className="md:w-4/5">
          <div className="text-white font-semibold md:text-6xl text-2xl flex items-center md:justify-start md:ml-20 ml-4 md:mt-[10%] mt-4">
            {movieTitle}
          </div>
          <div className="mt-4 md:flex text-lg">
            <div className="md:ml-20 flex ml-4   items-center">
              <label className="text-white font-bold">Release Date:</label>
              <span className="text-white p-1 m-2 rounded-2xl border border-white">
                {releaseDate}
              </span>
            </div>
            <div className="md:ml-4  flex ml-4 items-center">
              <label className="text-white font-bold">Genres:</label>
              {genre.map((item) => (
                <span
                  className="text-white ml-2 px-1 py-1  rounded-2xl border border-white"
                  key={item.id}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
          <div className="md:ml-20 ml-4 text-xl flex items-center mt-4">
            <label className="text-white font-bold">Tagline: </label>
            <div className="ml-2 text-white">"{tagLine}"</div>
          </div>
          <div className="md:ml-20 ml-4 text-xl  mt-4">
            <label className="text-white font-bold">Overview: </label>
            <div className="mt-2 text-white">{overView}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
