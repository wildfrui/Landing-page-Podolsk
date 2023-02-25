import { combineReducers } from "redux";

import { metaReducer } from "./metaReducer";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  metaState: metaReducer,
  userState: userReducer,
  authState: authReducer,
});

export default rootReducer;
