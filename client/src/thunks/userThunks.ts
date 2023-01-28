import { xhrGetUsers } from "../api/jsonApi";

import { setUsers } from "../actions/jsonActions";

export const getUsers = () => {
  return async (dispatch) => {
    // const { data } = await xhrGetUsers();
    // dispatch(setUsers(data));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUsers(data));
      });
  };
};
