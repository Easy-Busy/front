import { createSlice } from "@reduxjs/toolkit"

// 초기 상태 설정
const initialState = {
  selectedSection: "view1",
}

// 슬라이스 생성
const selectedSectionSlice = createSlice({
  name: "selectedSection",
  initialState,
  reducers: {
    setSelectedSection: (state, action) => {
      state.selectedSection = action.payload
    },
  },
})

// 액션 생성자 및 리듀서 익스포트
export const { setSelectedSection } = selectedSectionSlice.actions
export default selectedSectionSlice.reducer
