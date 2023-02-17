import { OutputData } from "@editorjs/editorjs";

export interface CreatePostDto {
  postTitle: string;
  postDescription: string;
  body: OutputData["blocks"];
  category: string;
}
