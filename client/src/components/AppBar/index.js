import React from "react";
import {
  MenuList,
  MenuItem,
  AppBar,
  Button,
  Typography,
  Toolbar,
  IconButton,
  Grow,
  Popper,
  ClickAwayListener,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
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
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    if (anchorRef.current && anchorRef.current.contains(Event.target)) {
      return;
    }
    setOpen(false);
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
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      id="simple-menu"
                      keepMounted
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
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Typography align="left" variant="h6" className={classes.title}>
            <span className="secondary">ad</span>
            <span className="tertiary">VOTE</span>
            <span className="secondary">cate</span>
          </Typography>
          <Button>
            <Link
              style={{ color: "whitesmoke" }}
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
