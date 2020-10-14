import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Grid,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logoWide from "../../images/logoWide.png";
import "./style.css";
import NavMenuList from "../MenuList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  }
}));

export default function ButtonAppBar({isLoggedIn, setIsLoggedIn}) {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="toolBar">
          <Grid 
            container 
            direction="row"
            spacing={0}
            alignItems="center"
            justify="center">
            <Grid item xs={4}>
              {isLoggedIn ? <NavMenuList setIsLoggedIn={setIsLoggedIn}  /> : <Button>
                <Link
                  style={{ color: "whitesmoke" }}
                  to="/login"
                  className={
                    window.location.pathname === "/login"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Sign Up/Login
                </Link>
              </Button>}
            </Grid>
            <Grid item xs={8}>
              <img className={classes.logo} src={logoWide} alt="adVOTEcate logoWide" />
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
