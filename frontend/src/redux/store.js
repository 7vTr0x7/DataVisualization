import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    bar: {},
  },
});

export default store;
