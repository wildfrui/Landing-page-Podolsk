import { CreateUserI } from "interfaces/CreateUserI";
import instance from "api";
import { AxiosResponse } from "axios";

// export const xhrGetUsers = async (createUserDto: CreateUserI) => {
//   const { data } = await serviceClient.get<CreateUserI, AxiosResponse>(
//     "/users",
//     // { data: createUserDto }
//   );
//   return data;
// };

export const xhrGetUsers = async () => {
  const { data } = await instance.get<AxiosResponse>(
    "/users"
    // { data: createUserDto }
  );
  return data;
};
