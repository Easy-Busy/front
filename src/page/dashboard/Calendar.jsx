// ✅ Calendar.jsx
import React from "react";
import { useParams } from "react-router-dom";

const Calendar = () => {
  const { workspaceId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">워크스페이스 {workspaceId} - 업무 캘린더</h1>
    </div>
  );
};

export default Calendar;