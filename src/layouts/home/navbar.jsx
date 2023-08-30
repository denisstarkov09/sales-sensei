import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useWidth from "../../hooks/useWidth";
import { useAuth } from "../../context/auth";

const Item = ({ title, route }) => {
  const location = useLocation();
  const selected = location.pathname === route;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(route);
      }}
      className="mr-[50px] cursor-pointer"
    >
      <p
        style={{
          fontWeight: selected && "700",
          color: selected ? "#E14857" : "#727272",
        }}
        className="text-[11px] "
      >
        {title}
      </p>
      {selected && (
        <div className="w-[20px] h-[3px] bg-[#E14857] mt-[3px] rounded-[21px]"></div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { authTokens, setAuthTokens } = useAuth();
  const w = useWidth();
  const navigate = useNavigate();
  const goUrl = (route) => {
    navigate(route);
  };
  return (
    <div className="w-[100%] h-[100px] shrink-0 justify-between flex items-center laptop:px-[40px]">
      {w < 1000 ? (
        <div className="w-[100%] h-[100%] flex items-center justify-center relative">
          <img
            src="/menu.svg"
            alt=""
            className="w-[38px] absolute left-[20px]"
          />
          <img src="/logoo.svg" className="w-[38px] cursor-pointer" alt="" />
        </div>
      ) : (
        <>
          <img src="/logoo.svg" alt="" className="w-[50px]" />

          <div className="flex items-center">
            <Item title="Home" route="/" />
            <Item title="Pricing" route="/pricing" />
            {!authTokens ? (
              <>
                <Item title="login" route="/login" />
                <div
                  onClick={() => {
                    goUrl("/signUp");
                  }}
                  className="cursor-pointer flex items-center justify-center px-[30px] py-[10px] rounded-[5px] bg-[#E14857] text-[#fff] font-medium text-[11px] "
                >
                  Sign Up
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={() => {
                    window.localStorage.removeItem("client_secret");
                    window.localStorage.removeItem("subscription_id");
                    setAuthTokens();
                    navigate("/", { replace: true });
                  }}
                  className="mr-[50px] cursor-pointer"
                >
                  <p
                    style={{
                      fontWeight: "700",
                    }}
                    className="text-[11px] "
                  >
                    {"logout"}
                  </p>
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      fontSize: "28px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {authTokens.email &&
                      authTokens.email.substr(0, 1).toLocaleUpperCase()}
                  </p>
                </div>
              </>
            )}
            <img
              src="/download.svg"
              className="w-[20px] ml-[40px] cursor-pointer"
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
