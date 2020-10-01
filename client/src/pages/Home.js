import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import theme from "../components/ThemeProvider";
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <Grid container spacing={1} justify={"center"} direction={"column"}>
      <Grid container item md={6}>
        <Card className={theme.card}>
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
      <Grid container item md={6}>
        <Card className={theme.card}>
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
