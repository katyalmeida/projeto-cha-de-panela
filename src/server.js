import axios from "axios";

const conectionApi = axios.create({
  baseURL: "https://api-cha-de-panela-production.up.railway.app",
});

export default conectionApi;
