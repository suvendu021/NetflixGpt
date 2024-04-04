import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import movieReducer from "./MoviesSlice";
import gptReducer from "./GptSlice";
import langReducer from "./LangSlice";

const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,
    lang: langReducer,
  },
});

export default AppStore;
