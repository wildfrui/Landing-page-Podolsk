import { CreateUserDto } from "interfaces/CreateUserDto";
import instance from "api";
import { AxiosResponse } from "axios";
import { LoginUserDto } from "interfaces/LoginUserDto";

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

export const xhrRegisterUser = async (dto: CreateUserDto) => {
  const { data } = await instance.post<CreateUserDto, AxiosResponse>(
    "/auth/register",
    {
      ...dto,
    }
  );
  return data;
};

export const xhrLoginUser = async (dto: LoginUserDto) => {
  const { data } = await instance.post<LoginUserDto, AxiosResponse>(
    "/auth/login",
    {
      ...dto,
    }
  );
  return data;
};

export const xhrAuthUser = async () => {
  const { data } = await instance.get<LoginUserDto, AxiosResponse>("/auth/me");
  return data;
};
