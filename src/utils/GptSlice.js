import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchValue: false,
  },
  reducers: {
    changeGptSearchValue: (state) => {
      state.gptSearchValue = !state.gptSearchValue;
    },
  },
});

export const { changeGptSearchValue } = GptSlice.actions;
export default GptSlice.reducer;
