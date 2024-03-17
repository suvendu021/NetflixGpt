import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen  z-10 bg-gradient-to-b from-black">
      <div className="px-2 md:px-4 flex justify-between ">
        <img
          className="md:w-52 w-28"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflixGptlogo"
        />
        {user && (
          <div className="flex">
            <div className="text-white flex items-center p-2 font-bold italic text-xs">
              WELCOME ({user.displayName})
            </div>
            <img
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              alt="userIcon"
              className="md:h-16 h-10 pt-2 md:pt-4"
            />
            <button
              className="font-bold text-xs p-2 text-white"
              onClick={signOutHandler}
            >
              (Sign-Out)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
