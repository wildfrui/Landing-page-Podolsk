import MetaActionType from "enums/MetaActionType";

export const setMeta = (payload: any) => {
  return {
    type: MetaActionType.SET_METADATA,
    payload,
  };
};
