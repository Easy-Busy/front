import { configureStore } from "@reduxjs/toolkit";
import selectedSectionReducer from "./main";
import workspaceReducer from "./workspace"; // 새로 만든 파일에서 가져옴

const store = configureStore({
  reducer: {
    selectedSection: selectedSectionReducer,
    workspace: workspaceReducer, // 이제 제대로 됨!
  },
});

export default store;
