import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.11:8000",
});
export default instance;
