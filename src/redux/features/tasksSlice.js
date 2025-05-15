import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  tasks: [
    {
      id: 1,
      title: "Buy groceries",
      status: "pending",
      important: false,
    },
    {
      id: 2,
      title: "Buy Sugar",
      status: "pending",
      important: true,
    },
    {
      id: 3,
      title: "Buy Cold Drinks",
      status: "pending",
      important: false,
    },
  ],
  error: "",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      const newTask = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = newTask;
    },
  },
});

export default tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;
