import { combineReducers } from "@reduxjs/toolkit";
import { TaskReducer } from "./taskReducer";

export default combineReducers({
  TaskStateData: TaskReducer,
});
