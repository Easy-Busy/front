// ✅ Project.jsx
import React from "react";
import { useParams } from "react-router-dom";

const Project = () => {
  const { workspaceId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">워크스페이스 {workspaceId} - 프로젝트 관리</h1>
    </div>
  );
};

export default Project;
