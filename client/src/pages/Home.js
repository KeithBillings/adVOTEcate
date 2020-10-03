import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
// import { withStyles } from '@material-ui/core/styles/withStyles';
import theme from "../components/ThemeProvider";
import registerData from "../utils/register.json";



const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "10%",
    width: "50%",
    textAlign: "center",
    background: "#E0E0E2"
  },
  button: {
    // background: theme.palette.primary.main,
    // background: theme.palette.primary.light,
    background: "lightblue",
    margin: "1rem"
  },
  dropdown: {
    background: "#F9F3DC"
  }
}));

function Home() {
  const classes = useStyles(theme);
  // console.log("the theme variable is: ", theme)

  const [stateInfo, setstateInfo] = useState("");

  //Function to get state information
  const getStateInformation = (e) => {
    e.preventDefault();
    const dropdownValue = document.getElementById("userSelection").value;
    const stateData = registerData[dropdownValue];

    setstateInfo(stateData)
  }


  return (
    <Grid container direction={"column"}  >
      <Grid container item justify={"center"} >
        <Card className={classes.card} >
          <CardContent >
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
              <select name="userSelection" id="userSelection" className={classes.dropdown}>
                <option value="default">
                  Select your state or territory
                  </option>
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
            <Button onClick={getStateInformation}>
              Get Info
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid container item justify={"center"}>
        <Card className={classes.card}>
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
              When a state is selected in the drop down menu, the states information is appended here.
              <br></br>
              To register online: <a href={`${stateInfo.online}`}>{stateInfo.online}</a> 
              <br></br>
              To register by mail: <a href={`${stateInfo.mail}`}>{stateInfo.mail}</a> 
            </Typography>
            <Typography>
              <Button className={classes.button}>
                Login
              </Button>
              <Button className={classes.button}>
                Register
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Home;