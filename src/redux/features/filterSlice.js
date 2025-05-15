import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalShow: false,
  isSidebarShow: false,
  manageTask: {},
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isModalShow = action.payload.status;
      state.manageTask = action.payload.task;
      console.log(action.payload);
    },
    closeModal: (state) => {
      state.isModalShow = false;
      state.manageTask = {};
    },
  },
});

export default filterSlice.reducer;
export const { showModal, closeModal } = filterSlice.actions;
