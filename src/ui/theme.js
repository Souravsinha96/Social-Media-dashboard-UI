import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3D41D7",
    },
    secondary: {
      main: "#DE350B",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    body1: {
      fontSize: "14px",
      letterSpacing: "-0.2px",
      fontFamily: "DM Sans",
      fontWeight: 700,
      color: "#D3D3FD",
      lineHeight: "24px",
    },
    body2: {
      fontFamily: "DM Sans",
      fontSize: "10px",
      fontWeight: 400,
      color: "#8F92A1",
    },
    h1: {
      fontFamily: "DM Sans",
      fontSize: "35px",
      fontWeight: 600,
      color: "#272835",
      lineHeight: "43.26px",
      letterSpacing: "-2px",
    },
    h2: {
      fontFamily: "DM Sans",
      fontSize: "20px",
      fontWeight: "semi-bold",
      color: "#272835",
    },
  },
  overrides: {
    MuiListItemIcon: {
      root: {
        minWidth: "39px",
      },
    },
  },
});

export default theme;
