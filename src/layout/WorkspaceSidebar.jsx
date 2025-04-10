// ✅ WorkspaceSidebar.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as CalendarIcon } from "../assets/menu/Icon/calendar.svg";
import { ReactComponent as ChatIcon } from "../assets/menu/Icon/chat.svg";
import { ReactComponent as ProjectIcon } from "../assets/menu/Icon/management.svg";

const WorkspaceSidebar = ({ workspaceId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dummyMembers = ["팀원이름", "팀원이름", "팀원이름", "팀원이름", "팀원이름"];

  const menuList = [
    { name: "업무 캘린더", icon: <CalendarIcon className="w-4 h-4" />, path: `/dashboard/${workspaceId}/calendar` },
    { name: "대화방", icon: <ChatIcon className="w-4 h-4" />, path: `/dashboard/${workspaceId}/chat` },
    { name: "프로젝트 관리", icon: <ProjectIcon className="w-4 h-4" />, path: `/dashboard/${workspaceId}/project` },
  ];

  return (
    <div className="w-[195px] h-[100vh] bg-[#F0F0F0]">
      <div className="w-[155px] h-[27px] p-[20px] font-bold text-[14px] text-[#A1A1A1]">
        GDG_project ⌄
      </div>
      <div className="w-[100%] pt-[22px]">
        <div className="w-full h-[0.5px] bg-white"></div>
      </div>
      <div className="flex flex-col gap-[12px] pt-[22px] w-[100%] text-[14px] px-[20px]">
        {menuList.map((item, index) => (
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
      <div className="text-[#A1A1A1] text-sm mt-4 px-[20px]">
        프로젝트 참여자 {dummyMembers.length}명
      </div>
      <div className="flex flex-col gap-2 mt-2 px-[20px]">
        {dummyMembers.map((name, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full"></div>
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
      {/* 하단: 사용자 정보 */}
      <div className="w-[195px] pt-[22px] absolute bottom-[30px]">
        <div className="w-[100%] h-[0.5px] bg-white"></div>
        <div className="w-[160px] h-[40px] pt-[6px] pl-[20px] pr-[20px] flex items-center gap-[20px]">
          <div className="flex items-center gap-[16px] w-[105px] h-[40px]">
            <div className="w-[32px] h-[32px] rounded-full bg-white"></div>
            <div className="w-[calc(100%-32px)] whitespace-nowrap overflow-hidden text-ellipsis">
              박근표
            </div>
          </div>
          <div className="px-[7px]"><ChatIcon className="w-4 h-4" /></div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSidebar;
