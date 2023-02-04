import axios from "axios";

const serviceClient = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default serviceClient;
