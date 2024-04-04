import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchValue: false,
    gptSearchMovie: null,
    gptSearchMovieName: null,
  },
  reducers: {
    changeGptSearchValue: (state) => {
      state.gptSearchValue = !state.gptSearchValue;
    },
    addGptSearchMovie: (state, action) => {
      const { gptSearchMovie, gptSearchMovieName } = action.payload;
      state.gptSearchMovie = gptSearchMovie;
      state.gptSearchMovieName = gptSearchMovieName;
    },
    removeGptSearchMovie: (state) => {
      state.gptSearchMovie = null;
      state.gptSearchMovieName = null;
    },
  },
});

export const { changeGptSearchValue, addGptSearchMovie, removeGptSearchMovie } =
  GptSlice.actions;
export default GptSlice.reducer;
