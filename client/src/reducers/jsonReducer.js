import JsonActionType from "../enums/JsonActionType.ts";

const initialState = {
  users: [],
};

export const jsonReducer = (state = initialState, action) => {
  switch (action.type) {
    case JsonActionType.GET_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    default:
      return state;
  }
};
