import React, { useState } from "react";
import HomeLayout from "../layouts/home";
import Footer from "../components/footer";
import useWidth from "../hooks/useWidth";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, goLogin }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal"
      style={{
        position: "absolute",
        width: "300px",
        top: "10%",
        backgroundColor: "#f1f2f4",
        borderRadius: "12px",
        boxShadow: "0px 1px 1px #091E4240, 0px 0px 1px #091E424F;",
        padding: "15px",
        display: "flex",
      }}
    >
      <div className="modal-content">
        <div className="m-times">
          <span className="close d-flex justify-content-end" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="m-header">
          <h1>Notice!</h1>
        </div>
        <div className="m-body">
          <p>You have to login this site to do this</p>
        </div>
        <div className="m-footer d-flex justify-content-space-between">
          <button
            onClick={goLogin}
            className="h-[44px] rounded-[8px] text-[14px] flex items-center bg-[#000] justify-center px-[30px] text-[#fff] font-bold"
          >
            OK
          </button>
          <button
            onClick={onClose}
            className="h-[44px] rounded-[8px] text-[14px] flex items-center bg-[#000] justify-center px-[30px] text-[#fff] font-bold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const w = useWidth();
  const [curr, setCurr] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const goCheckForm = () => {
    Number(window.localStorage.isLogined) === 1
      ? navigate("/checkout_form")
      : openModal();
  };

  const goLogin = () => {
    navigate("/login");
  };

  return (
    <HomeLayout>
      <div className="w-[100%] h-[100%] flex flex-col items-center scroll-bar-cool111 overflow-y-auto">
        <h1 className="text-[#000] mobile:text-[24px] px-[20px] laptop:text-[35px] flex flex-col items-center font-extrabold mt-[50px] text-center">
          Choose the plan that’s right for you!
          <div className="w-[280px] h-[5px] rounded-[12px] bg-[#000] mt-[10px]"></div>
        </h1>
        <div className="w-[100%] mobile:px-[20px] laptop:px-[100px] mt-[80px]">
          <div className="w-[100%] flex relative justify-between bg-[#FE4F600D] rounded-[20px] mobile:px-[15px] laptop:px-[40px] laptop:pb-[50px] mobile:pb-[100px] py-[50px]">
            {w < 1000 && (
              <>
                {curr === 0 && (
                  <div className="w-[100%] mb-[50px] py-[20px] drop-shadow-md bg-[#fff] pb-[150px] rounded-[20px]">
                    <h1 className="text-[32px] mt-[20px] font-extrabold text-center text-[#3C3C3C] ">
                      Pro
                    </h1>
                    <h1 className="text-[26px]  font-extrabold text-center text-[#E14857]">
                      US$ 19.99
                    </h1>
                    <p className="text-[14px] text-center mt-[0px] font-medium">
                      Per Month
                    </p>
                    <p className="text-[14px] text-center font-medium underline mt-[15px]">
                      1 User
                    </p>
                    <div className="w-[100%] px-[20%] mt-[20px]">
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Basic AI Sales Assistance</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Sales Script Generator</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Objection Handling Suggestions</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Basic Sales Insights</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Dashboard Community Support</div>
                      </div>
                    </div>
                    <div className="w-[100%] h-[34px] flex absolute bottom-[30px] justify-center">
                      <div
                        onClick={goCheckForm}
                        className="h-[44px] cursor-pointer rounded-[8px] text-[14px] flex items-center bg-[#000] justify-center px-[30px] text-[#fff] font-bold"
                      >
                        Get Started
                      </div>
                    </div>
                  </div>
                )}
                {curr === 1 && (
                  <div className="w-[100%]  mb-[50px] py-[20px] drop-shadow-md bg-[#fff] pb-[150px] rounded-[20px]">
                    <h1 className="text-[32px] mt-[20px] font-extrabold text-center text-[#3C3C3C] ">
                      Team
                    </h1>
                    <h1 className="text-[26px]  font-extrabold text-center text-[#E14857]">
                      US$ 89
                    </h1>
                    <p className="text-[14px] text-center mt-[0px] font-medium">
                      Per Month
                    </p>
                    <p className="text-[14px] text-center font-medium underline mt-[15px]">
                      1 User
                    </p>
                    <div className="w-[100%] px-[20%] mt-[20px]">
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Advanced AI Sales Assistance</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Real time objection Handling</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Advanced Sales Insights & Analytics</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Personalized Sales training </div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Salesforce & Notion Integration</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Periorty Support</div>
                      </div>
                    </div>
                    <div className="w-[100%] h-[34px] flex absolute bottom-[30px] justify-center">
                      <div className="h-[44px] rounded-[8px] text-[14px] flex items-center bg-[#000] justify-center px-[30px] text-[#fff] font-bold">
                        Get Started
                      </div>
                    </div>
                  </div>
                )}
                {curr === 2 && (
                  <div className="w-[100%] mb-[50px] py-[20px] drop-shadow-md bg-[#fff] pb-[150px] rounded-[20px]">
                    <h1 className="text-[32px] mt-[20px] font-extrabold text-center text-[#3C3C3C] ">
                      Enterprise
                    </h1>
                    <h1 className="text-[26px]  font-extrabold text-center text-[#E14857]">
                      Custom
                    </h1>
                    <p className="text-[14px] text-center mt-[0px] font-medium">
                      Per Month
                    </p>
                    <div className="w-[100%] px-[20%] mt-[20px]">
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>All features of Pro</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Dedicated AI Training & Customization</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>
                          Deep Integration Capabilities with Enterprise Systems
                        </div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Enhanced Security & Compliance Standards</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>White-Labeling Option</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>Dedicated Account Manager</div>
                      </div>
                      <div className="w-[100%] flex text-[16px] font-bold ">
                        <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                          •
                        </div>
                        <div>
                          Guarantee Custom Add-ons & Features Tailored to
                          Business Needs
                        </div>
                      </div>
                    </div>
                    <div className="w-[100%] h-[34px] flex absolute bottom-[30px] justify-center">
                      <div className="h-[44px] rounded-[8px] text-[14px] flex items-center bg-[#000] justify-center px-[30px] text-[#fff] font-bold">
                        Contact Us
                      </div>
                    </div>
                  </div>
                )}
                <div className="w-[100%] absolute bottom-[20px] left-0 h-[100px] flex items-center justify-center">
                  <div
                    onClick={() => {
                      if (curr !== 0) {
                        setCurr(curr - 1);
                      }
                    }}
                    className="cursor-pointer w-[60px] h-[60px] bg-[#E14857] rounded-[50%] flex items-center justify-center "
                  >
                    <img
                      src="/don.svg"
                      className="translate-x-[-2px] w-[12px]"
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() => {
                      if (curr !== 2) {
                        setCurr(curr + 1);
                      }
                    }}
                    className="cursor-pointer w-[60px] h-[60px] ml-[20px] bg-[#E14857] rounded-[50%] flex items-center justify-center "
                  >
                    <img
                      src="/don.svg"
                      className="translate-x-[2px] rotate-180 w-[12px]"
                      alt=""
                    />
                  </div>
                </div>
              </>
            )}

            {w > 1000 && (
              <>
                <div className="w-[30%] py-[20px] drop-shadow-md bg-[#fff] pb-[150px] rounded-[20px]">
                  <h1 className="text-[32px] mt-[20px] font-extrabold text-center text-[#3C3C3C] ">
                    Pro
                  </h1>
                  <h1 className="text-[26px]  font-extrabold text-center text-[#E14857]">
                    US$ 19.99
                  </h1>
                  <p className="text-[14px] text-center mt-[0px] font-medium">
                    Per Month
                  </p>
                  <p className="text-[14px] text-center font-medium underline mt-[15px]">
                    1 User
                  </p>
                  <div className="w-[100%] px-[20%] mt-[20px]">
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Basic AI Sales Assistance</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Sales Script Generator</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Objection Handling Suggestions</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Basic Sales Insights</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Dashboard Community Support</div>
                    </div>
                  </div>
                  <div className="w-[100%] h-[34px] flex absolute bottom-[30px] justify-center">
                    <div
                      onClick={goCheckForm}
                      className="h-[44px] rounded-[8px] text-[14px] flex items-center bg-[#000] justify-center px-[30px] text-[#fff] font-bold"
                    >
                      Get Started
                    </div>
                  </div>
                </div>
                <div className="w-[30%] py-[20px] drop-shadow-md bg-[#fff] pb-[150px] rounded-[20px]">
                  <h1 className="text-[32px] mt-[20px] font-extrabold text-center text-[#3C3C3C] ">
                    Team
                  </h1>
                  <h1 className="text-[26px]  font-extrabold text-center text-[#E14857]">
                    US$ 89
                  </h1>
                  <p className="text-[14px] text-center mt-[0px] font-medium">
                    Per Month
                  </p>
                  <p className="text-[14px] text-center font-medium underline mt-[15px]">
                    1 User
                  </p>
                  <div className="w-[100%] px-[20%] mt-[20px]">
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Advanced AI Sales Assistance</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Real time objection Handling</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Advanced Sales Insights & Analytics</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Personalized Sales training </div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Salesforce & Notion Integration</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Periorty Support</div>
                    </div>
                  </div>
                  <div className="w-[100%] h-[34px] flex absolute bottom-[30px] justify-center">
                    <div className="h-[44px] rounded-[8px] text-[14px] flex items-center bg-[#000] justify-center px-[30px] text-[#fff] font-bold">
                      Get Started
                    </div>
                  </div>
                </div>
                <div className="w-[30%] py-[20px] drop-shadow-md bg-[#fff] pb-[150px] rounded-[20px]">
                  <h1 className="text-[32px] mt-[20px] font-extrabold text-center text-[#3C3C3C] ">
                    Enterprise
                  </h1>
                  <h1 className="text-[26px]  font-extrabold text-center text-[#E14857]">
                    Custom
                  </h1>
                  <p className="text-[14px] text-center mt-[0px] font-medium">
                    Per Month
                  </p>
                  <div className="w-[100%] px-[20%] mt-[20px]">
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>All features of Pro</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Dedicated AI Training & Customization</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>
                        Deep Integration Capabilities with Enterprise Systems
                      </div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Enhanced Security & Compliance Standards</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>White-Labeling Option</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>Dedicated Account Manager</div>
                    </div>
                    <div className="w-[100%] flex text-[16px] font-bold ">
                      <div className="w-[20px] translate-y-[-0.5px] shrink-0">
                        •
                      </div>
                      <div>
                        Guarantee Custom Add-ons & Features Tailored to Business
                        Needs
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-[34px] flex absolute bottom-[30px] justify-center">
                    <div className="h-[44px] rounded-[8px] text-[14px] flex items-center bg-[#000] justify-center px-[30px] text-[#fff] font-bold">
                      Contact Us
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} goLogin={goLogin} />
        <Footer />
      </div>
    </HomeLayout>
  );
};

export default Pricing;
