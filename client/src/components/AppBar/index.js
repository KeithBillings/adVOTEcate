import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} className="menuItem">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className="menuItem">
              <Link
                to="/login"
                className={
                  window.location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Login
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className="menuItem">
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
            </MenuItem>
            <MenuItem onClick={handleClose} className="menuItem">
              <Link
                to="/profile"
                className={
                  window.location.pathname === "/profile"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Profile
              </Link>
            </MenuItem>
          </Menu>
          <Typography align="left" variant="h6" className={classes.title}>
            <span className="secondary">ad</span>
            <span className="tertiary">VOTE</span>
            <span className="secondary">cate</span>
          </Typography>
          <Button color="inherit">
            <Link
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
