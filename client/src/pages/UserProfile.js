import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  Button
} from "@material-ui/core";
import theme from "../components/ThemeProvider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';


const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: theme.card.textAlign,
    boxShadow: theme.card.boxShadow,
    "&:hover": theme.card["&:hover"],
    marginTop: "5%",
    width: "50%",
    background: "white",
  },
  button: {
    backgroundColor: "#268be3",
    "&:hover": {backgroundColor: theme.palette.primary.light},
    color: "white"
  }
}));

function UserProfile({user}) {
  const classes = useStyles(theme);

  return (
    <Grid container direction={"column"}>
      <Grid container item justify={"center"}>
        <Card className={classes.card}>
          <CardContent>
            <FontAwesomeIcon icon={faUserCircle} size="3x"/>
            <br/>
            <br/>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h5"}
              gutterBottom
            >
              Welcome, {user.name}!
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"subtitle1"}
            >
              <span>
                Email: {user.email} 
              </span>
              <br/>
              <span>
                Address: {user.address}
              </span>
              <br/>
              <span>
                City: {user.city}
              </span>
              <br/>
              <span>
                State: {user.state}
              </span>
              <br/>
              <span>
                Zip Code: {user.zip}
              </span>
              <br/>
              <span>
                Phone Number: {user.phone}
              </span>
            </Typography>
            <br/>
            <br/>
            <Button className={classes.button}>
              <Link
                style={{ color: "white" }}
                to="/events"
                className={
                  window.location.pathname === "/events"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Events
              </Link>
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default UserProfile;