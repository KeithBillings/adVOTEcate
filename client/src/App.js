import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Material UI Theme
import theme from "./components/ThemeProvider";
import { ThemeProvider } from '@material-ui/core/styles';

// Material UI Components
import ButtonAppBar from "./components/AppBar";

//Importing pages
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import UserEvents from "./pages/UserEvents";
import UserProfile from "./pages/UserProfile";

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./App.css";

AOS.init();

function App() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div> 
    <ThemeProvider theme={theme} >
      {/* <CssBaseline  /> */}
      <Router  >
        <ButtonAppBar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>  {/* aka navbar */}

        {/* Router for other pages */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login">
          <LoginRegister user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route exact path="/events">
          <UserEvents user={user} isLoggedIn={isLoggedIn}/>
        </Route>
        <Route exact path="/profile">
          <UserProfile user={user} isLoggedIn={isLoggedIn}/>
        </Route>
      </Router>

    </ThemeProvider>
    </div>
  )
}

export default App;
