import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Button, Typography } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Rowone from "../src/ui/Rowone";
import Rowtwo from "../src/ui/Rowtwo";

const useStyles = makeStyles((theme) => ({
  menu: {
    margin: "30px",
    height: "884px",
    maxWidth: "294px",
    backgroundColor: "#3D41D7",
    boxShadow: "0px 14px 34px rgba(34, 37, 169, 0.4)",
    borderRadius: "20px",
    backgroundImage: `url("assets/mask.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundBlendMode: "soft-light",
  },
  menuButton: {
    height: "48px",
    width: "48px",
    borderRadius: "20px",
    backgroundColor: "#fff",
  },
  upgrade: {
    height: "40px",
    width: "154px",
    borderRadius: "16px",
    backgroundColor: "#fff",
    textTransform: "none",
    fontSize: "12px",
    letterSpacing: "-0.2px",
    fontFamily: "DM Sans",
    fontWeight: 700,
    color: "#323484",
    lineHeight: "20px",
  },
  menuHeader: {
    fontSize: "22px",
    letterSpacing: "-0.4px",
    fontFamily: "DM Sans",
    fontWeight: 700,
    color: "#FFF",
    lineHeight: "22px",
    marginTop: "41px",
  },
  active: {
    borderLeft: "0",
    borderTopRightRadius: 0,
    "&:hover": {
      borderLeft: "3px #fff solid",
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
    },
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid item container direction="column" className={classes.menu} lg>
        <Grid item align="center">
          <Typography align="center" className={classes.menuHeader}>
            Socializer&#8482;
          </Typography>
        </Grid>
        <Grid item>
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItem button classes={{ root: classes.active }}>
              <ListItemIcon>
                <img src="assets/overview.svg" alt="overview" />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button classes={{ root: classes.active }}>
              <ListItemIcon>
                <img src="assets/leaderboard.svg" alt="leaderboard" />
              </ListItemIcon>
              <ListItemText primary="Leaderboard" />
            </ListItem>
            <ListItem button classes={{ root: classes.active }}>
              <ListItemIcon>
                <img src="assets/spreadsheet.svg" alt="spreadsheets" />
              </ListItemIcon>
              <ListItemText primary="Spreadsheets" />
            </ListItem>
            <ListItem button classes={{ root: classes.active }}>
              <ListItemIcon>
                <img src="assets/administration.svg" alt="administration" />
              </ListItemIcon>
              <ListItemText primary="administration" />
            </ListItem>
            <ListItem button classes={{ root: classes.active }}>
              <ListItemIcon>
                <img src="assets/sales.svg" alt="sales" />
              </ListItemIcon>
              <ListItemText primary="sales" />
              <ArrowDropDownIcon
                style={{
                  color: "#D3D3FD",
                  marginRight: "48px",
                  fontSize: "25px",
                }}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.active }}>
              <ListItemIcon>
                <img src="assets/schedule.svg" alt="schedule" />
              </ListItemIcon>
              <ListItemText primary="Schedule" />
            </ListItem>
          </List>
          <Typography
            style={{
              marginTop: "64px",
              marginLeft: "16px",
              fontSize: "12px",
              letterSpacing: "1px",
              marginBottom: "32px",
            }}
          >
            TEAMS
          </Typography>
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItem button classes={{ root: classes.active }}>
              <ListItemIcon>
                <img src="assets/message.svg" alt="message" />
              </ListItemIcon>
              <ListItemText primary="Message" />
              <Badge
                style={{
                  marginRight: "58px",
                }}
                badgeContent={9}
                color="secondary"
              ></Badge>
            </ListItem>
            <ListItem button classes={{ root: classes.active }}>
              <ListItemIcon>
                <img src="assets/support.svg" alt="support" />
              </ListItemIcon>
              <ListItemText primary="Support" />
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          style={{
            alignSelf: "center",
            marginTop: "49px",
            marginBottom: "24px",
          }}
        >
          <Button variant="contained" className={classes.menuButton}>
            <img src="assets/arrow.svg" alt="arrow" />
          </Button>
        </Grid>
        <Grid item align="center">
          <Typography
            align="center"
            style={{
              fontSize: "16px",
              letterSpacing: "-0.4px",
              color: "#FFF",
              lineHeight: "22px",
              maxWidth: "154px",
              fontWeight: 400,
            }}
          >
            Upgrade to <span style={{ fontWeight: 700 }}>Pro</span> for more
            resources
          </Typography>
        </Grid>

        <Grid item style={{ alignSelf: "center", marginTop: "24px" }}>
          <Button variant="contained" className={classes.upgrade}>
            Upgrade
          </Button>
        </Grid>
      </Grid>
      <Grid item container direction="column" style={{ marginLeft: "32px" }} lg>
        <Rowone />
        <Rowtwo />
      </Grid>
    </Grid>
  );
}
