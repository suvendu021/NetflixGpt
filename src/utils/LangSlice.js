import { createSlice } from "@reduxjs/toolkit";

const LangSlice = createSlice({
  name: "lang",
  initialState: {
    langPrefer: "en",
  },
  reducers: {
    changeLangPrefer: (state, action) => {
      state.langPrefer = action.payload;
    },
  },
});

export const { changeLangPrefer } = LangSlice.actions;
export default LangSlice.reducer;
