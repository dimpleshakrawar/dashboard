import { configureStore } from "@reduxjs/toolkit";
import adsReducer from "./adSlice";

const store = configureStore({
  reducer: {
    ads: adsReducer,
  },
});

export default store;
