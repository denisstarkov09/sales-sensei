import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home";

export const store = configureStore({
  reducer: { home: homeReducer },
});
