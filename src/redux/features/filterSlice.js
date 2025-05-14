import { createSlice } from "@reduxjs/toolkit";

const insitialState = {
  isModalShow: false,
  isSidebarShow: false,
};

const filterSlice = createSlice({
  name: "filter",
  insitialState,
  reducers: {
    showModal: (state, action) => {
      state.isModalShow = action.payload;
    },
    showSidebar: (state, action) => {
      state.isSidebarShow = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { showModal, showSidebar } = filterSlice.actions;
