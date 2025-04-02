import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-[16px] ">쉽게 프로젝트를 관리할 수 있는 협업툴</div>
      <div className="text-[45px] font-bold leading-normal">Easy Busy</div>
      <div className="pt-[70px]">
        <button
          className="w-[320px] h-[50px] bg-[#F4F4F4] shadow-[1px_1px_10px_0px_rgba(0,0,0,0.25)]"
          onClick={handleClick}
        >
          메인페이지로 가기
        </button>
      </div>
    </div>
  );
};

export default Login;
