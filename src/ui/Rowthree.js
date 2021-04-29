import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "299px",
    minHeight: "330px",
  },
  postContainer: {
    backgroundImage: `linear-gradient(131.58deg, #FA93D2 1.34%, #895FE0 103.94%),url("assets/postdesign.svg")`,
    borderRadius: "20px",
    Width: "314px",
    maxWidth: "314px",
    height: "280px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundBlendMode: "soft-light",
    backgroundSize: "318px",
  },
  postContent: {
    color: "#fff",
    fontSize: "17px",
    fontWeight: "400",
  },
}));

export default function Rowthree() {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="row"
      style={{ marginTop: "50px" }}
      alignItems="center"
    >
      <Grid
        item
        container
        direction="column"
        className={classes.container}
        justify="space-evenly"
        style={{ marginRight: "40px" }}
      >
        <Grid item>
          <Typography variant="h2" style={{ fontSize: "24px" }}>
            Latest updates
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <Button
              style={{
                background: "#F6FAFF",
                borderRadius: "40px",
                textTransform: "none",
                border: "1px solid #B3B6DA",
              }}
            >
              <Typography variant="body2">Brand additions</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="body2">Upcoming tasks</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ marginTop: "28px" }}
        >
          <img src="assets/twitter.svg" alt="twitter" />
          <Typography style={{ fontSzie: "15px", color: "#016F42" }}>
            +987.00
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <img src="assets/pinterest.svg" alt="pinterest" />
          <Typography style={{ fontSzie: "15px", color: "#FF0000" }}>
            +135.00
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <img src="assets/linkedin.svg" alt="linkedin" />
          <Typography style={{ fontSzie: "15px", color: "#6B46FF" }}>
            +26.00
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.container}
        style={{
          paddingTop: "20px",
          marginRight: "31px",
          position: "relative",
        }}
      >
        <Grid item>
          <img src="assets/donut.svg" />
          <img
            src="assets/bar.svg"
            style={{ position: "absolute", top: "8px", right: "14px" }}
          />
        </Grid>
        <Grid
          item
          style={{ position: "absolute", right: "88px", top: "152px" }}
        >
          <Typography
            align="center"
            style={{
              fontSize: "55px",
              fontWeight: 500,
              color: "#3D41D7",
              marginBottom: "20px",
            }}
          >
            89<span style={{ fontSize: "40px" }}>%</span>
          </Typography>
          <Typography
            align="center"
            style={{ fontSize: "16px", fontWeight: "normal", color: "#8F92A1" }}
          >
            Posts Went Viral
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.postContainer}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography align="center" paragraph className={classes.postContent}>
            Great Job, You Saved
          </Typography>
          <Typography
            align="center"
            style={{ fontSize: "57px", color: "#fff" }}
            paragraph
          >
            270K
          </Typography>
          <Typography align="center" className={classes.postContent}>
            Post Reach This Year
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="flex-end"
          style={{ position: "relative", bottom: "-58px", right: "22px" }}
        >
          <Typography
            variant="body2"
            style={{ fontSize: "12px", color: "#fff" }}
          >
            2020
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
