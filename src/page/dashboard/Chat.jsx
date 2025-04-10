// ✅ Chat.jsx
import React from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { workspaceId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">워크스페이스 {workspaceId} - 대화방</h1>
    </div>
  );
};

export default Chat;