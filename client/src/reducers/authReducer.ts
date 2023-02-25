import AuthActionType from "enums/AuthActionType";
import { getUserInfoFromLs } from "utils/index";

export const defaultState = {
  userInfo: getUserInfoFromLs(),
};

export const authReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case AuthActionType.SET_USER:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};
