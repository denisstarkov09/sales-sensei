import React from "react";
import Navbar from "./navbar";

const HomeLayout = ({ children }) => {
  return (
    <div className="w-[100%] flex flex-col  h-[100vh] relative">
      <Navbar />
      <div className="w-[100%] h-[100%] relative overflow-hidden">{children}</div>
    </div>
  );
};

export default HomeLayout;
