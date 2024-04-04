import React from "react";
import { BG_APP } from "../utils/Constant";
import GptSeachBar from "./GptSeachBar";
import GPTsearchResult from "./GPTsearchResult";

const GptSearchPage = () => {
  return (
    <div className="w-screen absolute inset-0">
      <GptSeachBar />
      <img
        className="fixed top-0 -z-10 w-full h-full object-cover"
        src={BG_APP}
        alt="bg_netflix"
      />
      <div className="bg-black opacity-30 -z-10 inset-0 absolute"></div>
      <GPTsearchResult />
    </div>
  );
};

export default GptSearchPage;
