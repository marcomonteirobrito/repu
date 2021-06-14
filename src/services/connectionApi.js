import axios from "axios";
import { parseCookies } from "nookies";

const { "repu-token": token } = parseCookies();

const connectionApi = axios.create({
  baseURL: "http://localhost:3333",
});

if (token) {
  connectionApi.defaults.headers["Authorizsation"] = `Bearer ${token}`;
}

export default connectionApi;
