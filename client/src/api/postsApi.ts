import { CreatePostI } from "interfaces/CreatePostI";
import { PaginatePostsI } from "interfaces/PaginatePostsI";
import serviceClient from "../config/serviceClient";
import { AxiosResponse } from "axios";

export const xhrGetPosts = async (): Promise<AxiosResponse> => {
  const { data } = await serviceClient.get<AxiosResponse>("/posts");
  return data;
};
export const xhrPaginatePosts = async (
  paginatePosts: PaginatePostsI
): Promise<AxiosResponse> => {
  const { data } = await serviceClient.get<PaginatePostsI, AxiosResponse>(
    "/posts",
    { params: paginatePosts }
  );
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
