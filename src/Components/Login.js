import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-dvw h-dvh"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-login-screen"
        />
      </div>
      <form className="bg-black absolute flex flex-col w-4/12 my-24 mx-auto right-0 left-0 md:px-16 md:py-14 px-4 py-2 ">
        <h2 className="text-white font-semibold text-4xl">Sign In</h2>
        <input
          className="p-2 mt-12"
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          className="p-2 mt-12"
          type="password"
          placeholder="Enter Your Password"
        />
        <button className="bg-red-600 text-white font-bold p-2 mt-12">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
