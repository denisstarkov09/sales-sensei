import React from "react";
import AuthLayout from "../layouts/auth";

const SignUp = (props) => {
  return (
    <AuthLayout r={"/graphic/auth/g5.svg"}>
      <div className="w-[100%] h-[100vh] py-[100px]  mobile:px-[25px] laptop:px-[80px]">
        <div className=" mobile:w-[100%] laptop:w-[500px]  h-[100%] flex flex-col justify-center">
          <h1 className="text-[35px] font-extrabold">
            What challenges do you face in your sales process?
          </h1>
          <div className="laptop:w-[500px] mobile:w-[100%] h-[180px] border-[1px] overflow-hidden mt-[40px] rounded-[4px] border-[#0000006B] flex ">
            <textarea
              type="text"
              className="w-[100%] h-[100%] pt-[20px] text-[16px] font-medium px-[22px] outline-none"
              placeholder="Describe about them*"
              name="describe"
              onChange={(e) => props.setDescribeInput(e)}
            />
          </div>
          {props.error && <p>{props.error}</p>}
          <div
            className="laptop:w-[290px] mobile:w-[100%] h-[50px] mt-[20px] bg-[#E14857] rounded-[3px] text-[#fff] font-bold tracking-wide cursor-pointer flex items-center justify-center"
            onClick={() => props.setpage(5)}
          >
            Continue
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
