import { configureStore } from "@reduxjs/toolkit";
import taskReducers from "../redux/features/tasksSlice";
import filterReducer from "../redux/features/filterSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducers,
    filter: filterReducer,
  },
});
