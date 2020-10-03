import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent } from "@material-ui/core";
import theme from "../components/ThemeProvider";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles/withStyles';


const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "10%",
    // justifyContent: "center"
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <Grid container direction={"column"} >
      <Grid container item justify={"center"}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              Nature Around Us
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              We are going to learn different kinds of species in nature that
              live together to form amazing environment.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container item justify={"center"}>
        <Card className={classes.card}>
          <CardContent className={theme.content}>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              Nature Around Us
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              We are going to learn different kinds of species in nature that
              live together to form amazing environment.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Home;
