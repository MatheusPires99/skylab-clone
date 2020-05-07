import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/MatheusPires99/skylab-clone",
});

export default api;
