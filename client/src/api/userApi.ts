import { CreateUserI } from "interfaces/CreateUserI";
import serviceClient from "../config/serviceClient";
import { AxiosResponse } from "axios";

// export const xhrGetUsers = async (createUserDto: CreateUserI) => {
//   const { data } = await serviceClient.get<CreateUserI, AxiosResponse>(
//     "/users",
//     // { data: createUserDto }
//   );
//   return data;
// };

export const xhrGetUsers = async () => {
  const { data } = await serviceClient.get<AxiosResponse>(
    "/users"
    // { data: createUserDto }
  );
  return data;
};
