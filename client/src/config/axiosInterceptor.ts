import instance from "api";
import { AxiosHeaders } from "axios";
import { parseCookies } from "nookies";

const setup = () => {
  instance.interceptors.request.use(
    (config: any) => {
      const userInfo = localStorage.getItem("userInfo");

      if (userInfo && config.headers) {
        const token = JSON.parse(userInfo)?.access_token;
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default setup;
