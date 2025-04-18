// Redux/workspace.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workspaces: [{ id: 1, name: "워크스페이스 1" }],
  selectedWorkspaceId: 1,
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    addWorkspace: (state) => {
      const newId = state.workspaces.length + 1;
      state.workspaces.push({ id: newId, name: `워크스페이스 ${newId}` });
    },
    selectWorkspace: (state, action) => {
      state.selectedWorkspaceId = action.payload;
    },
  },
});

export const { addWorkspace, selectWorkspace } = workspaceSlice.actions;
export default workspaceSlice.reducer;
