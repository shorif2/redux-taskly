import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  tasks: [
    {
      id: 1,
      title: "Buy groceries",
      status: "complete",
      important: false,
    },
    {
      id: 2,
      title: "Buy Sugar",
      status: "complete",
      important: true,
    },
    {
      id: 3,
      title: "Buy Cold Drinks",
      status: "complete",
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
  },
});

export default tasksSlice.reducer;
export const { addTask } = tasksSlice.actions;
