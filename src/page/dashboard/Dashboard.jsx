import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { workspaceId } = useParams();
  const { workspaces } = useSelector((state) => state.workspace);
  const workspace = workspaces.find((w) => w.id === parseInt(workspaceId));

  if (!workspace) return <div>존재하지 않는 워크스페이스입니다.</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">{workspace.name} 대시보드</h2>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white p-4 shadow rounded">
          📅 여기에 캘린더 들어감
        </div>

        <div className="bg-white p-4 shadow rounded">
          ✅ 투두 리스트 (Today / Tomorrow)
        </div>
      </div>

      <div className="mt-4 bg-white p-4 shadow rounded">
        👥 팀원 목록 (모양만 흰 원으로 나열해도 OK)
      </div>
    </div>
  );
};

export default Dashboard;
