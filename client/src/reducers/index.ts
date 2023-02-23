import { combineReducers } from "redux";

import { metaReducer } from "./metaReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  metaState: metaReducer,
  userState: userReducer,
});

export default rootReducer;
