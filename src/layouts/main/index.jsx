import React from "react";
import Sidebar from "./sidebar";

const MainLayout = ({children}) => {
  return (
    <div className="w-[100%] h-[100vh] relative flex overflow-hidden">
      <Sidebar />
      <div className="w-[100%] h-[100%]">{children}</div>
    </div>
  );
};

export default MainLayout;
