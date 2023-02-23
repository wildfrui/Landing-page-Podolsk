import UserActionType from "enums/UserActionType";

export const setUserInfo = (payload: any) => {
  return {
    type: UserActionType.SET_USER,
    payload,
  };
};
