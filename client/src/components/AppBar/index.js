import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavMenuList />
          <Container align="center">
            <img src={logoWide} alt="logoWide" />
          </Container>
          <Button>
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
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
