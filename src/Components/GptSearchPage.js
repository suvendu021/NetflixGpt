import React from "react";
import { BG_APP } from "../utils/Constant";
import GptSeachBar from "./GptSeachBar";

const GptSearchPage = () => {
  return (
    <div className="w-screen absolute inset-0">
      <GptSeachBar />

      <img className="absolute top-0 -z-10" src={BG_APP} alt="bg_netflix" />
      <div className="bg-black absolute inset-0 opacity-40 -z-10"></div>
    </div>
  );
};

export default GptSearchPage;
