import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO, USER_LOGIN_ICON } from "../utils/Constant";

const Header = () => {
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

  return (
    <div className="absolute w-screen  z-10 bg-gradient-to-b from-black ">
      <div className="px-2 md:px-4 flex justify-between ">
        <img className="md:w-52 w-28" src={LOGO} alt="logo" />
        {user && (
          <div className="flex">
            <div className="text-white flex items-center p-2 font-bold italic text-xs">
              WELCOME ({user.displayName})
            </div>
            <img
              src={USER_LOGIN_ICON}
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
