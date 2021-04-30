import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Badge } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";

export default function Rowone() {
  return (
    <Grid
      item
      container
      direction="row"
      alignItems="center"
      justify="flex-end"
      style={{ marginBottom: "30px", marginTop: "30px" }}
    >
      <Grid item container direction="column" md style={{ marginLeft: "14px" }}>
        <Typography
          variant="body2"
          style={{ fontSize: "15px", lineHeight: "18.54px" }}
        >
          Hello Dave, Welecome back
        </Typography>
        <Typography variant="h1">Your Dashboard is updated</Typography>
      </Grid>
      <Grid item>
        <Badge badgeContent={1} color="primary">
          <NotificationsNoneIcon style={{ color: "#8F92A1" }} />
        </Badge>
      </Grid>
      <Grid item>
        <SettingsIcon style={{ color: "#8F92A1", marginLeft: "50px" }} />
      </Grid>
      <Grid item>
        <img
          src="assets/avatar.jpg"
          alt="avatar"
          style={{ marginTop: "24px" }}
        />
      </Grid>
    </Grid>
  );
}
