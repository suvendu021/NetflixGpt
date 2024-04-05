import React from "react";

const LoadingPage = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black flex justify-center items-center z-50">
      <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingPage;
