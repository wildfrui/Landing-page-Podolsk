import { combineReducers } from "redux";

import { jsonReducer } from "./jsonReducer";
import { cashReducer } from "./cashReducer";

const rootReducer = combineReducers({
  userState: jsonReducer,
  cashState: cashReducer,
});

export default rootReducer;
