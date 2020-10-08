import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Material UI Theme
import theme from "./components/ThemeProvider";
import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from "@material-ui/core/styles";

// Material UI Components
import {Card, CardContent, CardMedia } from '@material-ui/core';
import ButtonAppBar from "./components/AppBar";
import Typography from '@material-ui/core/Typography';

//Importing pages
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import UserEvents from "./pages/UserEvents";
import UserProfile from "./pages/UserProfile";

import "./App.css";

function App() {
  const [user, setUser] = useState({});

  const useStyles = makeStyles((theme) => ({
    body: {
      background: "green"
    }
  }));

  const classes = useStyles(theme);
  
  return (
    <div > 
    <ThemeProvider theme={theme} >
      {/* <CssBaseline  /> */}
      <Router  >
        <ButtonAppBar  />  {/* aka navbar */}

        {/* Router for other pages */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login">
          <LoginRegister user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/events" component={UserEvents} />
        <Route exact path="/profile">
          <UserProfile user={user}/>
        </Route>
      </Router>

    </ThemeProvider>
    </div>
  )
}

export default App;
