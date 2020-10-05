import axios from "axios";

export default {
  signup(user) {
    return axios.post("/api/users", user); 
  },
  signin(user) {
    return axios.post("/api/users/signin", user); 
  }
}