import { combineReducers } from "@reduxjs/toolkit";
import boardReducer from "./board";

// Setup combine reducers for more reducders been added in future
const rootReducer = combineReducers({
  board: boardReducer
})

export default rootReducer;
