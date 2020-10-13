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
  },
  getVotingDates(state) {
    state = state.toUpperCase();
    return axios.get("https://cors-anywhere.herokuapp.com/https://api.voteamerica.com/v1/election/state/" + state).catch(err => {
      console.log("get voting dates error is: ", err)
      return err
    })
  },
  getDropOffLocations(address) {
    return axios.get("https://civicinfo.googleapis.com/civicinfo/v2/voterinfo?address=" + address + "&electionId=7000&key=AIzaSyBdXDp62MxR6fZwoJ4Hq5HPFzPB761IFwM").catch(err => {
      console.log("get drop off location error is: ", err)
      return err
    })
  }
}