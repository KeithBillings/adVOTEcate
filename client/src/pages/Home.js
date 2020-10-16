import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Button,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import theme from "../components/ThemeProvider";
import registerData from "../utils/register.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation, faFlagUsa} from '@fortawesome/free-solid-svg-icons';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: theme.card.textAlign,
    boxShadow: theme.card.boxShadow,
    "&:hover": theme.card["&:hover"],
    marginTop: "5%",
    width: "50%",
    background: "white",
  },
  dropdown: {
    background: "white",
  },
  logo: {
    textAlign: "center",
    marginBottom: "0%",
    marginTop: "2%",
  },
  button: {
    backgroundColor: "#268be3",
    "&:hover": {backgroundColor: theme.palette.primary.light},
    color: "white"
  }
}));

function Home() {
  const [stateInfo, setstateInfo] = useState("");
  const [messageHidden, setMessageHidden] = useState("none");
  const [onlineHidden, setOnlineHidden] = useState("none");
  const [mailHidden, setMailHidden] = useState("none");
  const [inPersonHidden, setInPersonHidden] = useState("none");

  const classes = useStyles(theme);

  //Function to get state information
  function getStateInformation() {
    const dropdownValue = document.getElementById("userSelection").value;
    const stateData = registerData[dropdownValue] || ""; // added || "" to handle a case where the user clicks submit on the default selection, so it doesnt return undefined and break the page

    setstateInfo(stateData);
  }
  
  function handleHidden () {
    if (stateInfo.message){
      setMessageHidden("block")
    } else setMessageHidden("none")
    if (stateInfo.online){
      setOnlineHidden("block")
    } else setOnlineHidden("none")
    if (stateInfo.mail){
      setMailHidden("block")
    } else setMailHidden("none")
    if (stateInfo.inPerson){
      setInPersonHidden("block")
    } else setInPersonHidden("none")
  }

  const handleOnClickEvent = (e) => {
    e.preventDefault();
    handleHidden();
    getStateInformation();
  };

  useEffect(() => {
    handleHidden();
  });


  return (
    <Grid container direction={"column"}>
      <Grid container item justify={"center"}>
        <Card className={classes.card} data-aos="fade-up">
          <CardContent>
            <FontAwesomeIcon icon={faSearchLocation} size="3x"/>
            <br/>
            <br/>
            <Typography
              className={"MuiTypography--heading", classes.typography}
              variant={"h5"}
              gutterBottom
            >
              Find Voting Information Based On Your Location
            </Typography>
            <Typography
              className={"MuiTypography--subheading", classes.typography}
              variant={"caption"}
            >
              <select
                name="userSelection"
                id="userSelection"
                className={classes.dropdown}
              >
                <option value="default">Select your state or territory</option>
                <option value="al">Alabama</option>
                <option value="ak">Alaska</option>
                <option value="as">American Samoa</option>
                <option value="az">Arizona</option>
                <option value="ar">Arkansas</option>
                <option value="ca">California</option>
                <option value="co">Colorado</option>
                <option value="ct">Connecticut</option>
                <option value="de">Delaware</option>
                <option value="dc">District of Columbia</option>
                <option value="fl">Florida</option>
                <option value="ga">Georgia</option>
                <option value="gu">Guam</option>
                <option value="hi">Hawaii</option>
                <option value="id">Idaho</option>
                <option value="il">Illinois</option>
                <option value="in">Indiana</option>
                <option value="ia">Iowa</option>
                <option value="ks">Kansas</option>
                <option value="ky">Kentucky</option>
                <option value="la">Louisiana</option>
                <option value="me">Maine</option>
                <option value="md">Maryland</option>
                <option value="ma">Massachusetts</option>
                <option value="mi">Michigan</option>
                <option value="mn">Minnesota</option>
                <option value="ms">Mississippi</option>
                <option value="mo">Missouri</option>
                <option value="mt">Montana</option>
                <option value="ne">Nebraska</option>
                <option value="nv">Nevada</option>
                <option value="nh">New Hampshire</option>
                <option value="nj">New Jersey</option>
                <option value="nm">New Mexico</option>
                <option value="ny">New York</option>
                <option value="nc">North Carolina</option>
                <option value="nd">North Dakota</option>
                <option value="mp">Northern Mariana Islands</option>
                <option value="oh">Ohio</option>
                <option value="ok">Oklahoma</option>
                <option value="or">Oregon</option>
                <option value="pa">Pennsylvania</option>
                <option value="pr">Puerto Rico</option>
                <option value="ri">Rhode Island</option>
                <option value="sc">South Carolina</option>
                <option value="sd">South Dakota</option>
                <option value="tn">Tennessee</option>
                <option value="tx">Texas</option>
                <option value="vi">U.S. Virgin Islands</option>
                <option value="ut">Utah</option>
                <option value="vt">Vermont</option>
                <option value="va">Virginia</option>
                <option value="wa">Washington</option>
                <option value="wv">West Virginia</option>
                <option value="wi">Wisconsin</option>
                <option value="wy">Wyoming</option>
              </select>
            </Typography>
            <br/>
            <br/>
            <Typography
              className={"MuiTypography--subheading", classes.typography}
              variant={"subtitle2"}
            >  
              <span style={{ display: messageHidden}}>
                {stateInfo.message ? stateInfo.message : ``}
              </span> 
                {stateInfo.message ? <br/> : ``}
              <span style={{ display: onlineHidden}}>
                {stateInfo.online ? "To register by online: " : ``}
                {stateInfo.online ? <a href={`${stateInfo.online}`}>{stateInfo.online}</a> : ``}
              </span>
                {stateInfo.online? <br/> : ``}
              <span style={{ display: mailHidden}}>
                {stateInfo.mail ? "To register by mail: " : ``}
                {stateInfo.mail ? <a href={`${stateInfo.mail}`}>{stateInfo.mail}</a> : ``}
              </span>
                {stateInfo.mail? <br/> : ``}
              <span style={{ display: inPersonHidden}}>
                {stateInfo.inPerson ? "To register in person: " : ``}
                {stateInfo.inPerson ? <a href={`${stateInfo.inPerson}`}>{stateInfo.inPerson}</a> : ``}
              </span> 
              {stateInfo.inPerson? <br/> : ``}      
            </Typography>
            <Button className={classes.button} onClick={handleOnClickEvent}>Get Info</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid container item justify={"center"}>
        <Card className={classes.card} data-aos="fade-up">
          <CardContent>
            <FontAwesomeIcon icon={faFlagUsa} size="3x"/>
            <br/>
            <br/>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h5"}
              gutterBottom
            >
              Welcome
            </Typography>
            <Typography
              className={"MuiTypography--subheding"}
              variant={"subtitle1"}
              gutterBottom
            >
              AdVOTEcate is your advocate to your voting needs! Our app intends to shows users how to register to vote, where the nearest polls are, sends text reminders near voting dates, and provides information of how to vote by mail.
            </Typography>
            <br/>
            <Button className={classes.button}>
              <Link
                style={{ color: "white" }}
                to="/login"
                className={
                  window.location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sign Up/Log In
              </Link>
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Home;
