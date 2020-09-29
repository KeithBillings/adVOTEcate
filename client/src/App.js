import React from 'react';
import ReactDOM from "react-dom";

// Material UI Theme
import theme from "./components/ThemeProvider";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Material UI Components
import {Card, CardContent, CardMedia } from '@material-ui/core';
import ButtonAppBar from "./components/AppBar";
import Typography from '@material-ui/core/Typography';


import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ButtonAppBar />
      <Card className={theme.card}>
        <CardMedia
          className={theme.media}
          src="https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        />
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
            We are going to learn different kinds of species in nature that live
            together to form amazing environment.
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default App;
