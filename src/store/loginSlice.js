import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: null,
  error: null,
  data: null,
};

const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    begin(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.data = action.payload.data;
    },
    success(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.data = action.payload.data;
    },
    errorr(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.data = action.payload.data;
    },
  },
});

export const { begin, success, errorr } = loginSlice.actions;
export default loginSlice.reducer;
