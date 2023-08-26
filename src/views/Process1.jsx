import React, { useEffect, useState } from "react";
import AuthLayout from "../layouts/auth";

const DropDown = ({ list, change }) => {
  const [curr, setCurr] = useState(0);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log(curr);
    const onPointerDown = () => {
      if (!hover) {
        setClicked(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown, false);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, false);
    };
  });
  return (
    <div className=" border-[1px] h-[60px]  relative  rounded-[4px] border-[#0000006B] flex ">
      <div
        onClick={() => {
          if (!clicked) {
            setClicked(true);
          }
        }}
        className="w-[100%] h-[100%] text-[16px] px-[12px] flex items-center  relative"
      >
        {list[curr]}
        <img
          src="/down.svg"
          className="absolute right-[18px] cursor-pointer"
          alt=""
        />
      </div>
      {clicked && (
        <div
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          className="border-[1px] flex-col absolute py-[10px] w-[100%] px-[10px] top-[70px] bg-[#fff]  rounded-[4px] border-[#0000006B] flex"
        >
          {list.map((item, i) => {
            return (
              <div
                onClick={() => {
                  setCurr(i);
                  change(i);
                }}
                style={{
                  color: curr === i ? "#fff" : "#000",
                  backgroundColor: curr === i ? "#E14857" : "#fff",
                }}
                className="w-[100%] h-[40px] rounded-[3px] cursor-pointer font-bold mb-[10px] flex items-center justify-center"
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Process1 = (props) => {
  return (
    <AuthLayout r={"/graphic/auth/g2.svg"}>
      <div className="w-[100%] h-[100vh] py-[100px] mobile:px-[25px] laptop:px-[80px]">
        <div className=" mobile:w-[100%] laptop:w-[500px] h-[100%] flex flex-col justify-center">
          <h1 className="text-[35px] font-extrabold">Fill these details</h1>

          <div className="grid laptop:grid-cols-2 gap-[20px] mobile:w-[100%] laptop:w-[900px] mt-[40px]">
            <div className=" border-[1px] h-[60px] overflow-hidden  rounded-[4px] border-[#0000006B] flex ">
              <input
                type="text"
                className="w-[100%] h-[100%] text-[16px] font-medium px-[12px] outline-none"
                placeholder="First Name*"
                name="firstname"
                value={props.firstname}
                onChange={(e) => props.setInput(e)}
              />
            </div>
            <div className=" border-[1px] h-[60px] overflow-hidden  rounded-[4px] border-[#0000006B] flex ">
              <input
                type="text"
                className="w-[100%] h-[100%] text-[16px] font-medium px-[12px] outline-none"
                placeholder="Last Name*"
                name="lastname"
                value={props.lastname}
                onChange={(e) => props.setInput(e)}
              />
            </div>

            <DropDown
              role={0}
              change={props.setJob}
              list={["Job Title", "Web developer", "App Developer"]}
            />
            <DropDown
              role={1}
              change={props.setCountry}
              list={["Country", "India", "Australia"]}
            />
          </div>
          {props.error && <p>{props.error}</p>}
          <div
            className="w-[100%] h-[60px] mt-[20px] bg-[#E14857] rounded-[3px] text-[#fff] font-bold tracking-wide cursor-pointer flex items-center justify-center"
            onClick={() => props.setpage(2)}
          >
            Continue
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Process1;
