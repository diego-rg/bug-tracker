import axios from "axios";

export default axios.create({
  baseURL: "https://drg-bugtracker.herokuapp.com/api",
});
