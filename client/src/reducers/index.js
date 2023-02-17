import { combineReducers } from "redux";

import { metaReducer } from "./metaReducer";

const rootReducer = combineReducers({
  metaState: metaReducer,
});

export default rootReducer;
