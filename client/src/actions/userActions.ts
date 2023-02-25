import UserActionType from "enums/UserActionType";

export const setUsers = (payload: any) => {
  return {
    type: UserActionType.SET_USER,
    payload,
  };
};
