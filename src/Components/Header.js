import React from "react";

const Header = () => {
  return (
    <div className="absolute w-dvw z-10">
      <div className="flex items-center justify-evenly md:justify-between px-2 md:px-20 py-4 bg-gradient-to-b from-black">
        <img
          className="md:w-44 w-28"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        <div>
          <select className=" p-1 mx-6 rounded-md bg-black text-white font-semibold border-2 border-gray-400">
            <option>Hindi</option>
            <option>Odia</option>
            <option>English</option>
          </select>
          <button className=" h-fit w-fit px-4 py-1 rounded-md bg-red-600 text-white font-semibold">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
