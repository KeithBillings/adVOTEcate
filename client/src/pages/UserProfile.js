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


const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: theme.card.textAlign,
    boxShadow: theme.card.boxShadow,
    "&:hover": theme.card["&:hover"],
    marginBottom: "5%",
    width: "50%",
    background: "white",
  }
}));

function UserProfile({user}) {
  const classes = useStyles(theme);

  return (
    <Grid container direction={"column"}>
      <br></br>
      <Grid container item justify={"center"}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              Welcome, {user.name}!
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              Your Account Information
              <br></br>
              <span>
                Email: {user.email} 
              </span>
              <br></br>
              <span>
                Address: {user.address}
              </span>
              <br></br>
              <span>
                City: {user.city}
              </span>
              <br></br>
              <span>
                State: {user.state}
              </span>
              <br></br>
              <span>
                Zip Code: {user.zip}
              </span>
              <br></br>
              <span>
                Phone Number: {user.phone}
              </span>
            </Typography>
            <br/>
            <Button>
              <Link
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