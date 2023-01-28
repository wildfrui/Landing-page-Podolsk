import JsonActionType from "../enums/JsonActionType.ts";

export const setUsers = (payload) => {
  return {
    type: JsonActionType.GET_USERS,
    payload,
  };
};
