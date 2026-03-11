import axios from "axios";

const API = axios.create({
  baseURL: "https://hrms-lite-pnsn.onrender.com"
});

export default API;