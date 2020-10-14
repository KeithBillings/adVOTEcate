import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import theme from "../components/ThemeProvider";
import API from "../utils/API";
import DenseTable from "../components/Table";
import DropOffContext from "../utils/DropOffContext";
import UserLocationsContext from "../utils/UserLocationsContext";

//For google maps API
import PollMap from "../components/Map";

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: theme.card.textAlign,
    boxShadow: theme.card.boxShadow,
    "&:hover": theme.card["&:hover"],
    marginBottom: "5%",
    marginTop: "5%",
    width: "60%",
    background: "#F9F3DC",
  },
  dropdown: {
    background: "#F9F3DC",
  },
  logo: {
    textAlign: "center",
    marginBottom: "0%",
    marginTop: "2%",
  },
}));

function UserEvents({user}) {
  const classes = useStyles(theme);

  const [stateName, setStateName] = useState("");
  const [stateInfoText, setStateInfoText] = useState("");
  const [ballotDropOffEvent, setBallotDropOffEvent] = useState("");
  const [ballotDropOffDate, setBallotDropOffDate] = useState("");
  const [ballotByMailEvent, setBallotByMailEvent] = useState("");
  const [ballotByMailDate, setBallotByMailDate] = useState("");
  const [ballotInPersonEvent, setBallotInPersonEvent] = useState("");
  const [ballotInPersonDate, setBallotInPersonDate] = useState("");
  const [generalElectionEvent, setGeneralElectionEvent] = useState("");
  const [generalElectionDate, setGeneralElectionDate] = useState("");
  const [dropOffLocationsByCity, setDropOffLocationsByCity] = useState([]);
  const [geocode, setGeocode] = useState("");

  //User Information
  const userAddress = user.address + " " + user.city + " " + user.state + " " + user.zip;

  //All state info
  function getAPI() {
    return API.getVotingDates(user.state)
  }

  //Civic Info API for voting locations
  function getCivicInfo() {
    return API.getDropOffLocations(userAddress);
  }

  //Geocoding API
  function getGeocode() {
    return API.getGeocode(userAddress);
  }

  function setState() {
    getAPI().then(function (res) {
      setStateName(res.data.name);
      setStateInfoText(res.data.state_information[0]["text"]);

      const stateInfo = res.data.state_information;

      stateInfo.forEach((info) => {
        if(info.field_type === "2020_ballot_drop_date"){
          setBallotDropOffEvent(info.field_type);
          setBallotDropOffDate(info.text);
        } else if(info.field_type === "2020_ballot_return_deadline_by_mail"){
          setBallotByMailEvent(info.field_type);
          setBallotByMailDate(info.text);
        } else if(info.field_type === "2020_ballot_return_deadline_in_person"){
          setBallotInPersonEvent(info.field_type);
          setBallotInPersonDate(info.text);
        } else if(info.field_type === "2020_general_election_date"){
          setGeneralElectionEvent(info.field_type);
          setGeneralElectionDate(info.text);
        }
      })
    },
  )}

  function setCoordinatesState() {
    getCivicInfo().then(function(res) {
      const locations = res.data.dropOffLocations;
      const locationsInUserCity = locations.filter((location) => {
        return location.address.city === user.city;
      })
      setDropOffLocationsByCity(locationsInUserCity);
    })
  }

  function setGeocodeState() {
    getGeocode().then(function(res) {
      const userCoords = res.data.results[0].geometry.location;
      setGeocode(userCoords);
    })
  }

  useEffect(() => {
    setState();
    setCoordinatesState();
    setGeocodeState();
  }, []);

  return (
    <Grid container direction={"column"}>
      <Grid container item justify={"center"}>
        <Card className={classes.card} data-aos="fade-up">
          <CardContent>
            <Typography
              className={""}
              variant={"h5"}
              gutterBottom
            >
              Important Dates for {stateName}
            </Typography>
            <Typography>
              State Information: {stateInfoText}
            </Typography>
            <br></br>
            <DenseTable ballotDropOffEvent={ballotDropOffEvent} ballotDropOffDate={ballotDropOffDate} ballotByMailEvent={ballotByMailEvent} ballotByMailDate={ballotByMailDate} ballotInPersonEvent={ballotInPersonEvent} ballotInPersonDate={ballotInPersonDate} generalElectionEvent={generalElectionEvent} generalElectionDate={generalElectionDate}/>
          </CardContent>
        </Card>
      </Grid>
      <Grid container item justify={"center"}>
        <Card className={classes.card} data-aos="fade-up">
          <CardContent>
            <Typography
              className={""}
              variant={"h5"}
              gutterBottom
            >
              Polling Locations Near You
            </Typography>
            <br></br>
            <Grid container item >
              <DropOffContext.Provider value={dropOffLocationsByCity}>
                <UserLocationsContext.Provider value={geocode}>
                  <PollMap />
                </UserLocationsContext.Provider>
              </DropOffContext.Provider>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}


export default UserEvents;