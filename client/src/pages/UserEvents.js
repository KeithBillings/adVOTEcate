import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import theme from "../components/ThemeProvider";
// import registerData from "../utils/register.json";
import API from "../utils/API";

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
    width: "50%",
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
  const [stateName, setStateName] = useState("");
  const [stateInfoText, setStateInfoText] = useState("");

  const classes = useStyles(theme);

  function getAPI() {
    return API.getVotingDates(user.state)
  }

  function setStates () {
    getAPI().then(function (res) {
      setStateName(res.data.name);
      setStateInfoText(res.data.state_information[0]["text"]);
  })};

  useEffect(() => {
    setStates();
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
              {stateName}
            </Typography>
            <Typography>
              State Information: {stateInfoText}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}


export default UserEvents;