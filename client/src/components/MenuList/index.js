import React from "react";
import {
  MenuList,
  MenuItem,
  IconButton,
  Grow,
  Popper,
  ClickAwayListener,
  Paper,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavMenuList({ isLoggedIn, setIsLoggedIn }) {
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

  function handleLogoutClick() {
    setIsLoggedIn(false);
    handleClose();
  }

  return (
    <Container>
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
                  keepmounted="true"
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
                  <MenuItem onClick={handleLogoutClick} className="menuItem">
                    <Link
                      to="/"
                      className={
                        window.location.pathname === "/home"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Log Out
                    </Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Container>
  );
}
