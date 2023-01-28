import jsonServiceClient from "../config/jsonServiceClient";

export const xhrGetUsers = () => {
  return jsonServiceClient.get("/users");
};
