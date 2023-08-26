import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%] flex mobile:px-[32px] laptop:px-[100px] laptop:flex-row mobile:flex-col mobile:py-[30px] laptop:py-[50px] mt-[100px] bg-[#E1485712]">
      <div className="w-[300px] shrink-0">
        <img src="/logoo.svg" alt="" />
        <p className="text-[14px] mt-[10px] text-[#8C959F]">
          Lorem ipsum dolor sit amet consectetur. Enim a tincidunt sem libero
          quam id ut vulputate.
        </p>
        <div className="w-[100%]  flex mobile:mt-[20px] laptop:mt-[10px]">
          <div className="w-[30px] h-[30px] rounded-[7px] bg-[#E14857] flex items-center justify-center">
            <img src="/socials/fb.svg" alt="" />
          </div>
          <div className="w-[30px] h-[30px] rounded-[7px] ml-[10px] bg-[#E14857] flex items-center justify-center">
            <img src="/socials/twitter.svg" alt="" />
          </div>
          <div className="w-[30px] h-[30px] rounded-[7px] ml-[10px] bg-[#E14857] flex items-center justify-center">
            <img src="/socials/mail.svg" alt="" />
          </div>
          <div className="w-[30px] h-[30px] rounded-[7px] ml-[10px] bg-[#E14857] flex items-center justify-center">
            <img src="/socials/insta.svg" alt="" />
          </div>
          <div className="w-[30px] h-[30px] rounded-[7px] ml-[10px] bg-[#E14857] flex items-center justify-center">
            <img src="/socials/fb.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex w-[100%] laptop:flex-row mobile:flex-col  h-[100%] justify-center">
        <div className="w-[300px] laptop:mt-0 mobile:mt-[20px]">
          <h1 className="font-bold ">Quick Links</h1>
          <h1 className="text-[#818181] mt-[10px]">SignUp</h1>
          <h1 className="text-[#818181] mt-[10px]">Benefits</h1>
        </div>
        <div className="w-[300px] laptop:mt-0 mobile:mt-[20px]">
          <h1 className="font-bold ">About</h1>
          <h1 className="text-[#818181] mt-[10px]">Privacy Policy</h1>
          <h1 className="text-[#818181] mt-[10px]">Terms & Conditions</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
