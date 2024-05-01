import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO, USER_LOGIN_ICON } from "../utils/Constant";
import { changeGptSearchValue, removeGptSearchMovie } from "../utils/GptSlice";
import { changeLangPrefer } from "../utils/LangSlice";

const Header = () => {
  const currentLang = useSelector((store) => store.lang.langPrefer);
  const isToggleGpt = useSelector((store) => store.gpt.gptSearchValue);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleGptSearch = () => {
    if (isToggleGpt) {
      dispatch(removeGptSearchMovie());
      dispatch(changeGptSearchValue());
    } else {
      dispatch(changeGptSearchValue());
    }
  };

  const handleLangPreference = (e) => {
    const language = e.target.value;
    dispatch(changeLangPrefer(language));
  };
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="absolute w-screen  z-10 bg-gradient-to-b from-black ">
      <div className="px-2 md:px-4 flex justify-between ">
        <p className=" text-red-600 font-serif font-extrabold pt-4 text-5xl">
          Filmy Hub
        </p>
        {user && (
          <div className="md:flex">
            <span
              className="md:hidden material-symbols-outlined text-white flex justify-end items-center mt-1.5"
              onClick={handleShowMenu}
            >
              {showMenu ? "close" : "menu"}
            </span>
            <div
              className={`md:flex ${
                showMenu ? " bg-black opacity-80 p-2" : "hidden"
              }`}
            >
              <div className="text-white flex text-center items-center p-2 font-bold italic  text-xs">
                WELCOME ({user.displayName})
              </div>
              <div className="flex justify-center mt-2">
                <img
                  src={USER_LOGIN_ICON}
                  alt="userIcon"
                  className="md:h-16 h-10  pt-2 md:pt-4"
                />
              </div>
              <div className="flex items-center justify-center mt-2">
                <button
                  className="md:px-4 px-2 py-2 md:m-2 m-0.5 rounded-lg bg-purple-700 text-white font-semibold  text-xs "
                  onClick={signOutHandler}
                >
                  Sign-Out
                </button>
              </div>

              <div className="flex items-center justify-center mt-2">
                <button
                  className="md:px-4 px-2 py-2 md:mr-2 mr-0.5 rounded-lg bg-purple-700 text-white font-semibold  text-xs "
                  onClick={handleGptSearch}
                >
                  {isToggleGpt ? "Home" : "GPTsearch"}
                </button>
              </div>
              {isToggleGpt ? (
                <div className="flex items-center justify-center mt-2">
                  <select
                    className="py-2 px-2 rounded-lg text-xs"
                    onChange={handleLangPreference}
                    value={currentLang}
                  >
                    <option value="en">English</option>
                    <option value="Hindi">हिंदी</option>
                    <option value="Odia">ଓଡିଆ</option>
                  </select>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
