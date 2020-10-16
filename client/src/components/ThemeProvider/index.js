import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Avenir"'
  },
  palette: {
    primary: {
      // blue
      main: "#253855",
    },
    secondary: {
      // red
      main: "#d44444",
    },
    // light: will be calculated from palette.primary.main,
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
  },
  card: {
    textAlign: "center",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.6)",
    "&:hover": {
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.6)",
    },
  },
  content: {
    textAlign: "left",
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },

});

export default theme;