import axios from "axios";

export default axios.create({
  baseURL: "https://api-bugtracker.onrender.com/api",
});
