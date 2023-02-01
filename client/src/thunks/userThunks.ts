import { xhrGetUsers } from "../api/jsonApi";

import { setUsers } from "../actions/jsonActions";
import JsonActionType from "enums/JsonActionType";

export const getUsers = () => {
  return async (
    dispatch: (arg: { type: JsonActionType; payload: any }) => void
  ) => {
    // const { data } = await xhrGetUsers();
    // dispatch(setUsers(data));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUsers(data));
      });
  };
};
