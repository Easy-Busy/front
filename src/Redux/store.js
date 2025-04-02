import { configureStore } from "@reduxjs/toolkit"
import selectedSectionReducer from "./main"

const store = configureStore({
  reducer: {
    selectedSection: selectedSectionReducer,
  },
})

export default store
