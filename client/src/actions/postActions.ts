import PostActionType from "enums/PostActionType";

export const addCover = (payload: any) => {
  return {
    type: PostActionType.ADD_COVER,
    payload,
  };
};
