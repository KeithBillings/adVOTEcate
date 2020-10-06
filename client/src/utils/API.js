import axios from "axios";

export default {
  signup(user) {
    return axios.post("/api/users", user).catch(err => {
      console.log("post users error is: ", err)
      return err
    }); 
  },
  signin(user) {
    return axios.post("/api/users/signin", user).catch(err => {
      console.log("post signin users error is: ", err)
      return err
    });  
  }
}