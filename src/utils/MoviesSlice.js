import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailer } = MoviesSlice.actions;
export default MoviesSlice.reducer;
