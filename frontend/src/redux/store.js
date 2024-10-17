import { configureStore } from "@reduxjs/toolkit";
import barReducer from "./slices/barSlice";
import filtersReducer from "./slices/filtersSlice";

const store = configureStore({
  reducer: {
    bar: barReducer,
    filters: filtersReducer,
  },
});

export default store;
