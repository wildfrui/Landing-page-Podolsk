import instance from "api";
import { AxiosResponse } from "axios";

export const xhrUploadImage = async (image: File): Promise<AxiosResponse> => {
  const formData = new FormData();
  formData.append("file", image);

  const { data } = await instance.post<AxiosResponse>(
    "/posts/cover",
    formData,
    {
      headers: {
        "content-type": image.type,
        "content-length": `${image.size}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};
