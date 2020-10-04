import React, { useState } from "react";
import { Card, CardContent, Button, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "10%",
    width: "50%",
    textAlign: "center",
    background: "#F9F3DC"
  },
  dropdown: {
    background: "#F9F3DC"
  }
}));


function LoginRegister() {

  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Card>
          <Typography>

          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}


export default LoginRegister;