import React, { useState } from "react";
import { ReactComponent as HomeIcon } from "../assets/menu/home.svg";
import { ReactComponent as Plus } from "../assets/menu/plus.svg";
import { ReactComponent as Feature } from "../assets/menu/Icon/feature.svg";
import { ReactComponent as Homes } from "../assets/menu/Icon/home.svg";
import { ReactComponent as Lucide } from "../assets/menu/Icon/lucide.svg";
import { ReactComponent as Message } from "../assets/menu/Icon/message.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [boxes, setBoxes] = useState([1, 2, 3]); // 초기 박스 3개
  const list = [
    { name: "홈", icon: <Homes />, path: "/main" },
    { name: "포트폴리오 둘러보기", icon: <Feature />, path: "/portfolio" },
    { name: "내 포트폴리오 관리", icon: <Lucide />, path: "/management" },
  ];
  const addBox = () => {
    setBoxes([...boxes, boxes.length + 1]);
  };

  return (
    <div className="flex gap-[4px] pr-[30px] h-[100vh] relative">
      <div className="w-[65px] h-[100vh] bg-[#D8D8D8] flex flex-col pt-[30px] flex items-center">
        <div
          className="w-[35px] h-[35px] rounded-[30px] bg-[#7E7E7E] flex justify-center items-center cursor-pointer hover:bg-[#6E6E6E]"
          onClick={() => navigate("/main")}
        >
          <HomeIcon />
        </div>
        <div className="w-[100%] pt-[22px]">
          <div className="w-full h-[0.5px] bg-[#A1A1A1]"></div>
        </div>
        <div className="flex flex-col gap-[22px] items-center mt-[22px] overflow-y-auto scrollbar-none h-[calc(100vh-180px)]">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="w-[35px] h-[35px] bg-white rounded-[4px]"
            ></div>
          ))}
          <button
            onClick={addBox}
            className="w-[35px] h-[35px] rounded-[4px] bg-white border border-white flex justify-center items-center text-white hover:bg-[#6E6E6E] cursor-pointer"
          >
            <Plus />
          </button>
        </div>
      </div>
      <div className="w-[195px] h-[100vh] bg-[#F0F0F0]">
        <div className="w-[155px] h-[27px] p-[20px] font-bold text-[14px] text-[#A1A1A1]">
          대시보드
        </div>
        <div className="w-[100%] pt-[22px]">
          <div className="w-full h-[0.5px] bg-white"></div>
        </div>
        <div className="flex flex-col gap-[12px] pt-[22px] w-[100%] h-[150px] text-[14px] px-[20px]">
          {list.map((item, index) => (
            <div
              key={index}
              className={`w-[155px] h-[27px] rounded-[5px] flex items-center gap-[8px] px-[5px] cursor-pointer hover:bg-[#7E7E7E] group ${
                location.pathname === item.path ? "bg-[#7E7E7E]" : ""
              }`}
              onClick={() => navigate(item.path)}
            >
              <div
                className={`w-[16px] h-[16px] ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-[#A1A1A1] group-hover:text-white"
                }`}
              >
                {item.icon}
              </div>
              <div
                className={`text-[14px] pt-[4px] ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-[#A1A1A1] group-hover:text-white"
                }`}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
        {/* 프로필 구역 */}
        <div className="w-[195px] pt-[22px] absolute bottom-[30px]">
          <div className="w-[100%] h-[0.5px] bg-white"></div>
          <div className="w-[160px] h-[40px] pt-[6px] pl-[20px] pr-[20px] flex items-center gap-[20px]">
            <div className="flex items-center gap-[16px] w-[105px] h-[40px]">
              <div className="w-[32px] h-[32px] rounded-[30px] bg-white "></div>
              <div className="flex text-align-center">user2</div>
            </div>
            <div className="px-[7px]">
              <Message />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
