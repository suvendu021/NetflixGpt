export const BG_APP =
  "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_LOGIN_ICON =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const TMDB_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const TMBD_NOWPLAYING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const MOVIE_POSTER = "https://image.tmdb.org/t/p/w780";

export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const SEARCHBAR_LANGUAGE = [
  {
    langId: "en",
    value: "what do you want to watch",
    searchValue: "search",
  },
  {
    langId: "Hindi",
    value: "आप क्या देखना चाहते हैं",
    searchValue: "खोज",
  },
  {
    langId: "Odia",
    value: "ଆପଣ କଣ ଦେଖିବାକୁ ଚାହୁଁଛନ୍ତି",
    searchValue: "ସନ୍ଧାନ",
  },
];
