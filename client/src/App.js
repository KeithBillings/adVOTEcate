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
        <Route exact path="/events">
          <UserEvents user={user}/>
        </Route>
        <Route exact path="/profile">
          <UserProfile user={user}/>
        </Route>
      </Router>

    </ThemeProvider>
    </div>
  )
}

export default App;
