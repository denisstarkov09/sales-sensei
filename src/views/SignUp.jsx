import React, { useState } from "react";
import AuthLayout from "../layouts/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Process1Page = React.lazy(() => import("../views/Process1.jsx"));
const Process2Page = React.lazy(() => import("../views/Process2.jsx"));
const Process3Page = React.lazy(() => import("../views/Process3.jsx"));
const Process4Page = React.lazy(() => import("../views/Process4.jsx"));
const Process5Page = React.lazy(() => import("../views/Process5.jsx"));

const SignUp = () => {
  const navigate = useNavigate();
  const [signupstate, setSignupState] = useState(0);
  const [error, setError] = useState("");
  // const [states, setstates] = useState({name:'', address:'', age:''});
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    job: "",
    country: "",
    companysize: "",
    describe: "",
    challenge: "",
  });
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const changePage = (id) => {
    setError(null);
    // e.preventDefault();
    if (id === 1) {
      if (!isValidEmail(inputs.email) || inputs.email === "") {
        setError("Email is invalid");
      } else if (inputs.password === "") {
        setError("Password is required");
      } else {
        setError(null);
        setSignupState(id);
      }
    } else if (id === 2) {
      if (inputs.firstname === "") {
        setError("First Name is required");
      } else if (inputs.lastname === "") {
        setError("Last Name is required");
      } else if (inputs.job === "") {
        setError("Job is required");
      } else if (inputs.country === "") {
        setError("Country is required");
      } else {
        setError(null);
        setSignupState(id);
      }
    } else if (id === 3) {
      setCompanysize(0);
      setSignupState(id);
    } else if (id === 4) {
      setSignupState(id);
    } else if (id === 5) {
      if (inputs.describe === "") {
        setError("Describe about them is required");
      } else {
        setError(null);
        setSignupState(id);
      }
    } else {
      setChallenge(0);
      setError(null);
      setSignupState(id);
    }
  };
  const setEmail = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  const setFirstInput = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  const setJob = (job) => {
    setInputs((inputs) => ({ ...inputs, job: job }));
    console.log(inputs);
  };
  const setCountry = (country) => {
    setInputs((inputs) => ({ ...inputs, country: country }));
    console.log(inputs);
  };
  const setCompanysize = (companysize) => {
    setInputs((inputs) => ({ ...inputs, companysize: companysize }));
    console.log(inputs);
  };
  const setDescribeInput = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };
  const setChallenge = (challenge) => {
    setInputs((inputs) => ({ ...inputs, challenge: challenge }));
    console.log(inputs);
  };
  const signUp = () => {
    axios
      .post("http://localhost:5000/api/users", inputs)
      .then((response) => {
        navigate("/login");
        // alert(response.data);
      })
      .catch((error) => {
        alert("disconnect server");
        navigate("/");
        console.error(error);
      });
  };
  const project = () => {
    switch (signupstate) {
      case 1:
        return (
          <Process1Page
            firstname={inputs.firstname}
            lastname={inputs.lastname}
            setInput={setFirstInput}
            setpage={changePage}
            setJob={setJob}
            setCountry={setCountry}
            error={error}
          />
        );
      case 2:
        return (
          <Process2Page setpage={changePage} setCompanysize={setCompanysize} />
        );
      case 3:
        return <Process3Page setpage={changePage} />;
      case 4:
        return (
          <Process4Page
            setpage={changePage}
            setDescribeInput={setDescribeInput}
            error={error}
          />
        );
      case 5:
        return <Process5Page signup={signUp} setChallenge={setChallenge} />;

      // case 3: return <ComponentC />;
      // case 4:  return <ComponentD />;

      default:
        return (
          <AuthLayout r={"/graphic/auth/g1.svg"}>
            {/* <form onSubmit={changePage.bind(this, 1)}> */}
            <div className="w-[100%] h-[100vh] py-[100px] mobile:px-[25px] laptop:px-[80px]">
              <div className=" mobile:w-[100%] laptop:w-[500px] h-[100%] flex flex-col justify-center">
                <h1 className="text-[35px] font-extrabold">
                  Create new account
                </h1>
                <p className="text-[17px] font-medium mt-[10px]">
                  Create a new account.
                </p>
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
                    onChange={(e) => setEmail(e)}
                  />
                </div>
                {error && <p>{error}</p>}
                <div
                  className="w-[100%] h-[50px] mt-[20px] bg-[#E14857] rounded-[3px] text-[#fff] font-bold tracking-wide cursor-pointer flex items-center justify-center"
                  type="submit"
                  onClick={() => changePage(1)}
                >
                  Continue with email
                </div>
                <p className="mt-[20px] text-[#000000AB] font-medium">
                  By clicking “Continue with Email” above, you acknowledge that
                  you have read and understood, and agree to Salesensei Terms &
                  Conditions and Privacy Policy.
                </p>
              </div>
            </div>
            {/* </form> */}
          </AuthLayout>
        );
    }
  };

  return <div>{project()}</div>;
};

export default SignUp;
