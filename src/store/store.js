// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectsSlice";

const store = configureStore({
  reducer: {
    projects: projectReducer, 
  },
});

export default store;
