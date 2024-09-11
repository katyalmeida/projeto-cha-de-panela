import axios from "axios";

const conectionApi = axios.create({
  baseURL: "http://localhost:3001",
});

export default conectionApi;
