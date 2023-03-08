import { combineReducers } from "redux";

import { metaReducer } from "./metaReducer";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";
import { postReducer } from "./postReducer";

const rootReducer = combineReducers({
  metaState: metaReducer,
  userState: userReducer,
  authState: authReducer,
  postState: postReducer,
});

export default rootReducer;
