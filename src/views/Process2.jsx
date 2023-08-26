import React, { useState } from "react";
import AuthLayout from "../layouts/auth";

const RadioContainer = ({ label, selected, onClick }) => {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className="h-[80px] cursor-pointer dropped relative flex items-center justify-between px-[25px]	 rounded-[4px] "
    >
      <div className="flex">
        <img src="/graphic/auth/peep.svg" className="w-[30px]" alt="" />
        <span className="font-bold ml-[10px]">{label}</span>
      </div>
      <div className="w-[27px] h-[27px] rounded-[50px] border-[2px] overflow-hidden p-[4px] border-[#E14857]">
        {selected && (
          <div className="w-[100%] h-[100%] bg-[#E14857] rounded-[50%]"></div>
        )}
      </div>
    </div>
  );
};

const SignUp = (props) => {
  const [selected, setSelected] = useState(0);
  return (
    <AuthLayout r={"/graphic/auth/g3.svg"}>
      <div className="w-[100%] h-[100vh] py-[100px]  mobile:px-[25px] laptop:px-[80px]">
        <div className=" mobile:w-[100%] laptop:w-[500px]  h-[100%] flex flex-col justify-center">
          <h1 className="text-[35px] font-extrabold">
            What is the size of your company?
          </h1>
          <div className="grid laptop:grid-cols-2 gap-[20px] mobile:w-[100%] laptop:w-[900px] mt-[40px]">
            <RadioContainer
              selected={selected === 0}
              label="1-50"
              onClick={() => {
                props.setCompanysize(0);
                setSelected(0);
              }}
            />
            <RadioContainer
              selected={selected === 1}
              label="51-200"
              onClick={() => {
                setSelected(1);
                props.setCompanysize(1);
              }}
            />
            <RadioContainer
              selected={selected === 2}
              label="200-1000"
              onClick={() => {
                setSelected(2);
                props.setCompanysize(2);
              }}
            />
          </div>
          <div className="laptop:w-[290px] mobile:w-[100%] h-[60px] mt-[20px] bg-[#E14857] rounded-[3px] text-[#fff] font-bold tracking-wide cursor-pointer flex items-center justify-center" onClick={() =>props.setpage(3)}>
            Continue
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
