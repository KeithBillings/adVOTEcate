import React, { useState } from "react";
import { Card, CardContent, Button, Grid, Typography, makeStyles } from "@material-ui/core";

import API from "../utils/API";

import theme from "../components/ThemeProvider";

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


function LoginRegister() {
  const classes = useStyles(theme);

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const nameValue = document.getElementById("createName").value;
    const passwordValue = document.getElementById("createPassword").value;
    const addressValue = document.getElementById("createAddress").value;
    const emailValue = document.getElementById("createEmail").value;
    const phoneValue = document.getElementById("createPhone").value;

    const formValues = {
      name: nameValue,
      password: passwordValue,
      address: addressValue,
      email: emailValue,
      phone: phoneValue
    }
    API.signup(formValues).then(res => {
      console.log(res);
    })
    // console.log("the create values are: ", formValues);

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
      console.log(res);
    })
    // console.log("the login values are: ", loginValues);
  }

  return (
    <Grid container direction={"column"}>
      <Grid container item justify={"center"} >
        <Card className={classes.card}>
          <Typography variant={"h4"}>
            Create New Account
          </Typography>
          <Typography>
            <form id="createForm" onSubmit={handleCreateSubmit}>
              Name: <input id="createName"></input><br></br>
              Password: <input type="password" id="createPassword"></input><br></br>
              Address: <input id="createAddress"></input><br></br>
              Email: <input id="createEmail"></input><br></br>
              Phone: <input id="createPhone"></input><br></br>
            </form>
          </Typography>
          <Button onClick={handleCreateSubmit}>
            Create
            </Button>
          <Typography variant={"h4"}>
            Login
          </Typography>
          <Typography>
            <form id="loginForm" onSubmit={handleLoginSubmit}>
              Email: <input id="loginEmail"></input><br></br>
              Password: <input type="password" id="loginPassword"></input><br></br>
            </form>
          </Typography>
          <Button onClick={handleLoginSubmit}>
            Login
            </Button>
        </Card>
      </Grid>
    </Grid>
  );
}


export default LoginRegister;