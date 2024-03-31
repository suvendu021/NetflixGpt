import React from "react";

const GptSeachBar = () => {
  return (
    <div className="pt-[12%] flex justify-center">
      <form className=" bg-black p-2 w-6/12 flex justify-center">
        <input
          className="py-2 px-4 mx-2 w-9/12"
          type="text"
          placeholder="what do you want to watch"
        />
        <button className=" bg-red-600 text-white mx-2 px-4 py-2">
          search
        </button>
      </form>
    </div>
  );
};

export default GptSeachBar;
