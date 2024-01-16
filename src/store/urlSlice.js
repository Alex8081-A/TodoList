import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: null,
};

const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    setUrl(state, action) {
      state.url = action.payload.url;
    },
  },
});

export const { setUrl } = urlSlice.actions;
export default urlSlice.reducer;
