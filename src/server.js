import axios from "axios";

const conectionApi = axios.create({
  baseURL: "api-cha-de-panela-production-b121.up.railway.app",
});

export default conectionApi;
