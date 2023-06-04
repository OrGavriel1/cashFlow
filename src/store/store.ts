import { configureStore } from "@reduxjs/toolkit";
import lngSliceReducer from "../components/LngSlice";

const store = configureStore({
  reducer: {
    lng: lngSliceReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
