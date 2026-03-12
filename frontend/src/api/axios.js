import axios from "axios";

const API = axios.create({
  baseURL: "https://hrms-lite-pnsn.onrender.com",
  headers: {
    "Content-Type": "application/json"
  }
});

API.interceptors.response.use(
  (response) => response,
  (error) => {

    let message = "Something went wrong";

    const detail = error.response?.data?.detail;

    if (Array.isArray(detail)) {
      // FastAPI validation errors
      message = detail.map(e => e.msg).join(", ");
    } 
    else if (typeof detail === "string") {
      // Custom backend errors
      message = detail;
    }

    return Promise.reject(new Error(message));
  }
);

export default API;