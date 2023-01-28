import axios from "axios";

const jsonServiceClient = axios.create({
  baseUrl: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default jsonServiceClient;
