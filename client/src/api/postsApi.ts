import { CreatePostDto } from "interfaces/CreatePostDto";
import { PaginatePostsI } from "interfaces/PaginatePostsI";
import instance from "api";
import { AxiosResponse } from "axios";
import { PostResponse } from "types/PostResponse";

export const xhrGetPosts = async (): Promise<AxiosResponse> => {
  const { data } = await instance.get<AxiosResponse>("/posts");
  return data;
};

export const xhrPaginatePosts = async (
  paginatePosts: PaginatePostsI
): Promise<AxiosResponse> => {
  const { data } = await instance.get<PaginatePostsI, AxiosResponse>("/posts", {
    params: paginatePosts,
  });
  return data;
};

export const xhrCreatePost = async (
  dto: CreatePostDto
): Promise<PostResponse> => {
  const { data } = await instance.post<CreatePostDto, { data: PostResponse }>(
    "/posts",
    dto
  );
  return data;
};
