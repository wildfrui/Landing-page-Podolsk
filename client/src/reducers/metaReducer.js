import MetaActionType from "enums/MetaActionType";

const defaultState = {
  meta: {},
};

export const metaReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MetaActionType.SET_METADATA:
      return { ...state, meta: action.payload };
    default:
      return state;
  }
};
