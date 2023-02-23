import { UserResponse } from "types/UserResponse";
import userActionType from "enums/UserActionType";

const defaultState = {
  user: null,
};

export const userReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case userActionType.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
