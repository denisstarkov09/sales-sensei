import React, { useState } from "react";
import AuthLayout from "../layouts/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [signupstate, setSignupState] = useState(0);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const setEmail = (e) => {
    const { name, value } = e.target;

    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  const setPassword = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(inputs.email)) {
      setError("Email is invalid");
    } else {
      setError(null);
      axios
        .post("http://localhost:5000/api/login/verify", { email: inputs.email })
        .then((response) => {
          if (response.data.length > 0) {
            if (inputs.password !== response.data[0].password) {
              setError("Password is not correct");
            } else {
              console.log("Login Succeed");
              window.localStorage.setItem("isLogined", 1);
              window.localStorage.setItem("email", inputs.email);
              if (
                response.data[0].client_secret !== null &&
                response.data[0].subscription_id !== null
              ) {
                window.localStorage.setItem(
                  "client_secret",
                  response.data[0].client_secret
                );
                window.localStorage.setItem(
                  "subscription_id",
                  response.data[0].subscription_id
                );
                navigate("/main");
              } else {
                navigate("/");
              }
            }
          } else {
            setError("Email is not exist");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const project = () => {
    return (
      <AuthLayout r={"/graphic/auth/g1.svg"}>
        <form onSubmit={handleSubmit}>
          <div className="w-[100%] h-[100vh] py-[100px] mobile:px-[25px] laptop:px-[80px]">
            <div className=" mobile:w-[100%] laptop:w-[500px] h-[100%] flex flex-col justify-center">
              <h1 className="text-[35px] font-extrabold">
                Login with Email and Password
              </h1>
              <div className="w-[100%] border-[1px] overflow-hidden mobile:mt-[10px] laptop:mt-[40px] rounded-[4px] border-[#0000006B] flex ">
                <div className="w-[50px] h-[60px] flex items-center justify-center shrink-0">
                  <img src="/graphic/auth/mail.svg" alt="" />
                </div>
                <input
                  type="email"
                  className="w-[100%] h-[100%] text-[16px] font-medium px-[12px] outline-none"
                  placeholder="Email Address"
                  name="email"
                  onChange={(e) => setEmail(e)}
                />
              </div>
              <div className="w-[100%] border-[1px] overflow-hidden mt-[20px] rounded-[4px] border-[#0000006B] flex ">
                <div className="w-[50px] h-[60px] flex items-center justify-center shrink-0">
                  <img src="/graphic/auth/lock.svg" alt="" />
                </div>
                <input
                  type="password"
                  className="w-[100%] h-[100%] text-[16px] font-medium px-[12px] outline-none"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e)}
                />
              </div>
              {error && <p>{error}</p>}
              <button className="w-[100%] h-[50px] mt-[20px] bg-[#E14857] rounded-[3px] text-[#fff] font-bold tracking-wide cursor-pointer flex items-center justify-center">
                Log in
              </button>
              <div className="d-flex justify-content-center">
                <p>
                  Don’t have an account?{" "}
                  <a
                    href="/signUp"
                    style={{ color: "blue", fontStyle: "italic" }}
                  >
                    <u>Sign up</u>
                  </a>
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <p>
                  Go Home?{" "}
                  <a href="/" style={{ color: "blue", fontStyle: "italic" }}>
                    <u>Home</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </AuthLayout>
    );
  };

  return <div>{project()}</div>;
};

export default Login;
