import React from "react";
import { ReactComponent as HomeIcon } from "../assets/menu/home.svg";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-[4px] pr-[30px]">
      <div className="w-[65px] h-[100vh] bg-[#D8D8D8] flex justify-center pt-[30px]">
        <div
          className="w-[35px] h-[35px] rounded-[30px] bg-[#7E7E7E] flex justify-center items-center cursor-pointer hover:bg-[#6E6E6E]"
          onClick={() => navigate("/main")}
        >
          <HomeIcon />
        </div>
      </div>
      <div className="w-[195px] h-[100vh] bg-[#F0F0F0]"></div>
    </div>
  );
};

export default Menu;
