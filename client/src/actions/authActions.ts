import AuthActionType from "enums/AuthActionType";

export const setUserInfo = (payload: any) => {
  return {
    type: AuthActionType.SET_USER,
    payload,
  };
};
