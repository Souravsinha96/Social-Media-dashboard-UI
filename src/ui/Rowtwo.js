import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme) => ({
  plus: {
    background: "#3D41D7",
    boxShadow: "0px 14px 34px rgba(34, 37, 169, 0.4)",
    borderRadius: "10px",
    height: "50px",
    minWidth: "50px",
  },
  play: {
    backgroundColor: "#fff",

    height: "42px",
    minWidth: "42px",
    boxShadow: "0px 14px 34px rgba(34, 37, 169, 0.4)",
    borderRadius: "9999px",
    marginBottom: "20px",
  },
  container: {
    borderRadius: "20px",
    maxWidth: "299px",
    minHeight: "330px",
  },
  smallContainer: {
    height: "134px",
    width: "136px",
    borderRadius: "20px",
  },
}));

export default function Rowtwo() {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        style={{
          background: "#FFF4F2",
          marginRight: "23px",
        }}
        className={classes.container}
        md={4}
        alignItems="center"
      >
        <Grid item style={{ marginTop: "20px" }}>
          <img
            src="assets/tea.svg"
            alt="trending"
            style={{ maxWidth: "259px" }}
          />
        </Grid>

        <Grid
          item
          container
          direction="row"
          style={{ marginTop: "60px", marginBottom: "39px" }}
          justify="space-between"
        >
          <Grid item style={{ marginLeft: "22px" }}>
            <Typography gutterBottom variant="h2">
              Latest Updates
            </Typography>
            <Typography variant="body2">F&B Industry</Typography>
          </Grid>
          <Grid item style={{ marginRight: "22px" }}>
            <Button className={classes.plus}>
              <AddIcon style={{ color: "#fff", fontSize: "40px" }} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        md={4}
        className={classes.container}
        alignItems="center"
        style={{ marginRight: "43px" }}
      >
        <Grid item>
          <img
            src="assets/graph.svg"
            alt="graph"
            style={{ maxWidth: "330px", minHeight: "164px" }}
          />
        </Grid>

        <Grid item container direction="row" style={{ marginTop: "30px" }}>
          <Grid
            item
            direction="column"
            container
            style={{
              background: "#F6F8FF",
              marginRight: "27px",
            }}
            className={classes.smallContainer}
            md
            alignItems="center"
            justify="center"
          >
            <Button className={classes.play}>
              <PlayArrowIcon style={{ color: "#3D41D7", fontSize: "25px" }} />
            </Button>

            <Typography variant="h2" style={{ fontSize: "17px" }}>
              40K
            </Typography>
            <Typography variant="body2">Videos Played</Typography>
          </Grid>
          <Grid
            item
            direction="column"
            container
            md
            style={{
              background: "#3D41D7",
              boxShadow: "0px 14px 34px rgba(34, 37, 169, 0.4)",
              paddingBottom: "20px",
            }}
            className={classes.smallContainer}
            alignItems="center"
            justify="space-around"
          >
            <img
              src="assets/posts.svg"
              alt="posts"
              style={{ marginTop: "35px", marginBottom: "26px" }}
            />
            <Typography
              variant="h2"
              style={{ color: "#fff", fontSize: "17px" }}
            >
              130
            </Typography>
            <Typography variant="body2" style={{ color: "#fff" }}>
              Scheduled Posts
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        style={{
          backgroundImage: `url("assets/weather.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "330px",
          maxWidth: "314px",
        }}
        md={4}
        className={classes.container}
      >
        <Grid item container direction="column">
          <Grid
            item
            style={{ maxWidth: "180px", marginTop: "36px", marginLeft: "36px" }}
          >
            <Typography
              variant="h2"
              style={{ fontSize: "26px", color: "#fff", fontWeight: 600 }}
            >
              What’s your plan?
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              style={{ fontSize: "16px", color: "#fff" }}
            >
              Looks like a shady day
            </Typography>
            <Typography
              variant="h2"
              style={{ fontSize: "48px", color: "#fff", fontWeight: 400 }}
            >
              36°
            </Typography>
          </Grid>
          <Grid
            item
            container
            style={{
              background: "#FFFFFF",
              boxShadow: "0px 14px 34px rgba(34, 37, 169, 0.4)",
              borderRadius: "20px 0px 20px 20px",
              width: "92px",
              height: "90px",
              position: "relative",
              left: "200px",
              bottom: "-54px",
            }}
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Button className={classes.plus}>
                <AddIcon style={{ color: "#fff", fontSize: "40px" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
