/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validation } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [signIn, setsignIn] = useState(true);

  const navigate = useNavigate();

  const changeToSignInOrOff = () => {
    setsignIn(!signIn);
  };

  const email = useRef(null);
  const userName = useRef(null);
  const password = useRef(null);

  const ValidationCheck = () => {
    let message;
    if (signIn) {
      message = Validation(null, email.current.value, password.current.value);
    } else {
      message = Validation(
        userName.current.value,
        email.current.value,
        password.current.value
      );
    }

    setInValidError("*" + message);

    if (message) return;

    if (!signIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          //update displayName in redux store
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              if (auth.currentUser) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              } else {
                dispatch(removeUser());
              }
              navigate("/browse");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setInValidError("*" + errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setInValidError("*" + errorCode + "-" + errorMessage);
        });
    }
  };

  const [inValidError, setInValidError] = useState(null);

  return (
    <div>
      <Header />
      <div className="absolute inset-0 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-hero-screen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-55"></div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black text-white absolute flex flex-col w-fit mt-24 mx-auto right-0 left-0 p-6 bg-opacity-80"
      >
        <h2 className="font-semibold text-4xl">
          {signIn ? "Sign In" : "Sign Up"}
        </h2>
        {!signIn && (
          <input
            ref={userName}
            className={`p-2 mt-8 w-72 bg-slate-700  font-semibold`}
            type="text"
            placeholder="Enter Your Name"
          />
        )}
        <input
          ref={email}
          className="p-2 mt-8 w-72 bg-slate-700  font-semibold"
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          ref={password}
          className="p-2 mt-8 bg-slate-700  font-semibold w-72"
          type="password"
          placeholder="Enter Your Password"
        />
        <p className="py-2 text-red-700 font-bold w-72 text-wrap">
          {inValidError}
        </p>
        <button
          className="bg-red-700  font-bold p-2 mt-6 w-72"
          onClick={ValidationCheck}
          type="button"
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="mt-4 text-center cursor-pointer"
          onClick={changeToSignInOrOff}
        >
          {signIn
            ? "New to Netflix ? Sign Up Now"
            : "Already have an account ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
