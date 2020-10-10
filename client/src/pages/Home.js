import React, { useState } from "react";
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
import logo from "../images/logo.png";

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//import "./home.css";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: theme.card.textAlign,
    boxShadow: theme.card.boxShadow,
    "&:hover": theme.card["&:hover"],
    marginBottom: "5%",
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

AOS.init();

function Home() {
  const [stateInfo, setstateInfo] = useState("");
  const [hidden, setHidden] = useState("none");

  const classes = useStyles(theme);

  //Function to get state information
  function getStateInformation() {
    const dropdownValue = document.getElementById("userSelection").value;
    const stateData = registerData[dropdownValue] || ""; // added || "" to handle a case where the user clicks submit on the default selection, so it doesnt return undefined and break the page

    setstateInfo(stateData);
  }

  const handleOnClickEvent = (e) => {
    e.preventDefault();
    getStateInformation();
    setHidden("");
  };

  return (
    <Grid container direction={"column"}>
      <Grid container justify={"center"} className={classes.logo}>
        <img src={`${logo}`} alt="logo" />
      </Grid>
      <Grid container item justify={"center"}>
        <Card className={classes.card} data-aos="fade-up">
          <CardContent>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              Find Voting Information Based On Your Location
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
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
            <br></br>
            <Button onClick={handleOnClickEvent}>Get Info</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid container item justify={"center"}>
        <Card className={classes.card} data-aos="fade-up">
          <CardContent>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              Welcome
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              When a state is selected in the drop down menu, the states
              information is appended here.
              <br></br>
              <span style={{ display: hidden }}>
                To register online:{" "}
                <a href={`${stateInfo.online}`}>{stateInfo.online}</a>
              </span>
              <br></br>
              <span style={{ display: hidden }}>
                To register by mail:{" "}
                <a href={`${stateInfo.mail}`}>{stateInfo.mail}</a>
              </span>
            </Typography>
            <Typography>
              <Button>
                <Link
                  to="/login"
                  className={
                    window.location.pathname === "/login"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Login
                </Link>
              </Button>
              <Button>
                <Link
                  to="/login"
                  className={
                    window.location.pathname === "/login"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Register
                </Link>
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Home;
