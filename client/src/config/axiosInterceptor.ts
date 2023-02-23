import instance from "api";
import { AxiosHeaders } from "axios";
import { parseCookies } from "nookies";

const setup = () => {
  instance.interceptors.request.use(
    (config: any) => {
      const { authToken } = parseCookies();
      if (authToken && config.headers) {
        config.headers["Authorization"] = `Bearer ${authToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default setup;
