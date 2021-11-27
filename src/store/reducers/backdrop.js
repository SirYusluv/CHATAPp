import { createSlice } from "@reduxjs/toolkit";

export const backdropSlice = createSlice({
  name: "backdrop",
  initialState: {
    showBackdrop: false,
  },
  reducers: {
    showBackdrop: (state) => {
      state.showBackdrop = true;
    },
    hideBackdrop: (state) => {
      state.showBackdrop = false;
    },
  },
});

export const { showBackdrop, hideBackdrop } = backdropSlice.actions;
export default backdropSlice.reducer;
