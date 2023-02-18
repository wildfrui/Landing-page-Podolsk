import { OutputData } from "@editorjs/editorjs";

export type PostResponse = {
  id: number;
  postDescription: string;
  postTitle: string;
  body: OutputData["blocks"];
  category: string;
  createdAt: string;
  views: number;
};
