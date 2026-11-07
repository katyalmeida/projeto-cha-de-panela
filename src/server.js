import axios from "axios";

const conectionApi = axios.create({
  baseURL: "https://api-cha-de-panela-production-b121.up.railway.app",
});

export default conectionApi;
