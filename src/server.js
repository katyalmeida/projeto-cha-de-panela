import axios from "axios";

const conectionApi = axios.create({
  baseURL: "api-cha-de-panela-production.up.railway.app",
});

export default conectionApi;
