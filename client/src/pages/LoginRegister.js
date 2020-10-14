import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button, Grid, Typography, makeStyles } from "@material-ui/core";

import API from "../utils/API";

import theme from "../components/ThemeProvider";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#F9F3DC",
    textAlign: "center",
    justifyContent: "center",
    boxShadow: theme.card.boxShadow,
    "&:hover": theme.card["&:hover"],
    width: "50%",
    marginTop: "5%",
    padding: "2%",
    "&:*": {
      padding: "5%",
    }
  },
  dropdown: {
    background: "#F9F3DC"
  },
  form: {
    display: "table",
    width: "50%",
    margin: "auto"
  },
  formRow: {
    display: "table-row"
  },
  formCell: {
    display: "table-cell"
  },
  h4: {
    marginBottom: "1rem"
  }
}));


function LoginRegister({ setUser, user, isLoggedIn, setIsLoggedIn }) {
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
        setIsLoggedIn(true);

      } else {
        alert("Email or password is incorrect");
      }
    })
  }

  return (
    <Grid container direction={"column"}>
      <Grid container item justify={"center"} >
        {/* login card */}
        <Card className={classes.card}>
          <Typography variant={"h4"} className={classes.h4}>
            Login
          </Typography>
          <form id="loginForm" className={classes.form} onSubmit={handleLoginSubmit}>
            <div className={classes.formRow}>
              <label className={classes.formCell}>
                Email:
              </label>
              <input className={classes.formCell} id="loginEmail"></input>
            </div>
            <div className={classes.formRow}>
              <label className={classes.formCell}>
                Password:
              </label>
              <input className={classes.formCell} type="password" id="loginPassword"></input><br />
            </div>
          </form>
          <Button onClick={handleLoginSubmit}>
            Login
          </Button>
          {/* create account card */}
        </Card>
      </Grid>
      <Grid container direction={"column"}  >
        <Grid container item justify={"center"} >
          <Card className={classes.card} container item justify={"center"}>
            <Typography variant={"h4"}  className={classes.h4}>
              Create New Account
          </Typography>
            <form id="createForm" className={classes.form} onSubmit={handleCreateSubmit}>
              <div className={classes.formRow}>
                <label className={classes.formCell}>
                  Name:
                </label>
                <input className={classes.formCell} id="createName"></input>
              </div>
              <div className={classes.formRow}>
                <label className={classes.formCell}>
                  Email:
                </label>
                <input className={classes.formCell} id="createEmail"></input>
              </div>
              <div className={classes.formRow}>
                <label className={classes.formCell}>
                  Password:
                </label>
                <input type="password" id="createPassword"></input>
              </div>
              <div className={classes.formRow}>
                <label className={classes.formCell}>
                  Address:
                </label>
                <input id="createAddress"></input>
              </div>
              <div className={classes.formRow}>
                <label className={classes.formCell}>
                  City:
                </label>
                <input id="createCity"></input>
              </div>
              <div className={classes.formRow}>
                <label className={classes.formCell}>
                  State:
                  </label>
                <select
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
              </div>
              <div className={classes.formRow}>
                <label className={classes.formCell}>
                  Zip:
                  </label>
                <input id="createZip"></input>
              </div>
              <div className={classes.formRow}>
                <label className={classes.formCell}>
                  Phone:
                  </label>
                <input id="createPhone"></input>
              </div>
            </form>
            <Button onClick={handleCreateSubmit}>
              Create
          </Button>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}


export default LoginRegister;