import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loginReducer from "./loginSlice";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
