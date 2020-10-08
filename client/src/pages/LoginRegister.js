import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardContent, Button, Grid, Typography, makeStyles } from "@material-ui/core";

import API from "../utils/API";

import theme from "../components/ThemeProvider";

import UserProfile from "../pages/UserProfile";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#F9F3DC",
    textAlign: theme.card.textAlign,
    boxShadow: theme.card.boxShadow,
    "&:hover": theme.card["&:hover"],
    width: "50%",
    marginTop: "5%",
    "&:*": {
      padding: "5%",
    }
  },
  dropdown: {
    background: "#F9F3DC"
  }
}));


function LoginRegister({setUser, user}) {
  const classes = useStyles(theme);
  const history = useHistory();

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const nameValue = document.getElementById("createName").value;
    const emailValue = document.getElementById("createEmail").value;
    const passwordValue = document.getElementById("createPassword").value;
    const addressValue = document.getElementById("createAddress").value;
    const cityValue = document.getElementById("createCity").value;
    const stateValue = document.getElementById("createState").value;
    const zipValue = document.getElementById("createZip").value;
    const phoneValue = document.getElementById("createPhone").value;

    const formValues = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      address: addressValue,
      city: cityValue,
      state: stateValue,
      zip: zipValue,
      phone: phoneValue
    }
    API.signup(formValues);
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const emailValue = document.getElementById("loginEmail").value;
    const passwordValue = document.getElementById("loginPassword").value;

    const loginValues = {
      email: emailValue,
      password: passwordValue
    }

    API.signin(loginValues).then(res => {
      if (res.status === 200) {
        setUser(res.data);
        history.push("/profile");
        // add local storage

      } else {
        alert("Email or password is incorrect");
      }
    })
  }

  return (
    <Grid container direction={"column"}>
      <Grid container item justify={"center"} >
        <Card className={classes.card}>
          <Typography variant={"h4"}>
            Create New Account
          </Typography>
          <form id="createForm" onSubmit={handleCreateSubmit}>
            Name: <input id="createName"></input><br></br>
            Email: <input id="createEmail"></input><br></br>
            Password: <input type="password" id="createPassword"></input><br></br>
            Address: <input id="createAddress"></input><br></br>
            City: <input id="createCity"></input><br></br>
            State: <select
              name="createState"
              id="createState"
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
            </select><br></br>
            Zip: <input id="createZip"></input><br></br>
            Phone: <input id="createPhone"></input><br></br>
          </form>
          <Button onClick={handleCreateSubmit}>
            Create
          </Button>
          <Typography variant={"h4"}>
            Login
          </Typography>
          <form id="loginForm" onSubmit={handleLoginSubmit}>
            Email: <input id="loginEmail"></input><br></br>
            Password: <input type="password" id="loginPassword"></input><br></br>
          </form>
          <Button onClick={handleLoginSubmit}>
            Login
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}


export default LoginRegister;