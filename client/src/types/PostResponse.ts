import { OutputData } from "@editorjs/editorjs";
import { UserResponse } from "./UserResponse";

export type PostResponse = {
  id: number;
  postDescription: string;
  postTitle: string;
  body: OutputData["blocks"];
  author: UserResponse;
  category: string;
  createdAt: string;
  views: number;
};
