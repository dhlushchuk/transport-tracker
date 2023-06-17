import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./language/languageSlice";
import listReducer from "./list/listSlice";
import transportReducer from "./transport/transportSlice";

const rootReducer = combineReducers({
  language: languageReducer,
  list: listReducer,
  transport: transportReducer,
});

export default rootReducer;
