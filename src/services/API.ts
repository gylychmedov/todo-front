import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
