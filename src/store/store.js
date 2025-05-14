import { configureStore } from "@reduxjs/toolkit";
import taskReducers from "../redux/features/tasksSlice";
import filterReducer from "../redux/features/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducers,
    filter: filterReducer,
  },
});
