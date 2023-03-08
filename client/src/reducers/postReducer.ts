import PostActionType from "enums/PostActionType";

export const defaultState = {
  chosenImage: null,
};

export const postReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case PostActionType.ADD_COVER:
      return { ...state, chosenImage: action.payload };
    default:
      return state;
  }
};
