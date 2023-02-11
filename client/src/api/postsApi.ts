import { CreatePostI } from "interfaces/CreatePostI";
import serviceClient from "../config/serviceClient";
import { AxiosResponse } from "axios";

export const xhrGetPosts = async (): Promise<AxiosResponse> => {
  const { data } = await serviceClient.get<AxiosResponse>("/posts");
  return data;
};

export const xhrCreatePost = async (
  createPost: CreatePostI
): Promise<AxiosResponse> => {
  const { data } = await serviceClient.post<CreatePostI, AxiosResponse>(
    "/posts",
    createPost
  );
  return data;
};
