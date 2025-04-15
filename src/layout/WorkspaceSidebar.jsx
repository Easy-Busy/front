// ✅ WorkspaceSidebar.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as CalendarIcon } from "../assets/menu/Icon/calendar.svg";
import { ReactComponent as ChatIcon } from "../assets/menu/Icon/chat.svg";
import { ReactComponent as ProjectIcon } from "../assets/menu/Icon/management.svg";
import { ReactComponent as DropdownIcon } from "../assets/menu/Icon/dropdown.svg";

const WorkspaceSidebar = ({ workspaceId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dummyMembers = ["팀원이름", "팀원이름", "팀원이름", "팀원이름", "팀원이름"];

  const menuList = [
    { name: "업무 캘린더", icon: <CalendarIcon className="w-4 h-4" />, path: `/dashboard/${workspaceId}/calendar` },
    { name: "대화방", icon: <ChatIcon className="w-4 h-4" />, path: `/dashboard/${workspaceId}/chat` },
    { name: "프로젝트 관리", icon: <ProjectIcon className="w-4 h-4" />, path: `/dashboard/${workspaceId}/project` },
  ];

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const workspaceList = [
    { id: 1, name: "초대하기" },
    { id: 2, name: "워크스페이스 설정" }
  ];

  return (
    <div className="w-[195px] h-[100vh] bg-[#F0F0F0] relative">
      <div className="relative">
        <div
          className="flex justify-between items-center w-[195px] h-[27px] px-[20px] pt-[20px] pb-[0px] font-bold text-[14px] text-[#A1A1A1] cursor-pointer"
          onClick={handleDropdownToggle}
        >
          <span style={{ color: 'color(display-p3 0.6321 0.6321 0.6321)', fontFamily: 'Pretendard', fontSize: '14px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal' }}>GDG_project</span>
          <DropdownIcon className={`w-[24px] h-[24px] transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} />
        </div>
        {isDropdownOpen && (
          <div className="absolute left-[20px] top-[60px] w-[155px] bg-white border border-[#D0D0D0] rounded shadow-md z-10">
            {workspaceList.map((ws) => (
              <div
                key={ws.id}
                onClick={() => navigate(`/dashboard/${ws.id}/calendar`)}
                className="px-4 py-2 hover:bg-[#F5F5F5] cursor-pointer"
              >
                {ws.name}
              </div>
            ))}
          </div>
        )}
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
          <div className="px-[7px]">💬</div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSidebar;
