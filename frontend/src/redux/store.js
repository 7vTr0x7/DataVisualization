import { configureStore } from "@reduxjs/toolkit";
import barReducer from "./slices/barSlice";

const store = configureStore({
  reducer: {
    bar: barReducer,
  },
});

export default store;
