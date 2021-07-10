import { Avatar, Grid, Typography } from "@material-ui/core";
import React from "react";
function TechAvatar(props) {
  return (
    <Grid item container direction="column" style={{ width: "60px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Avatar src={props.logo} style={{ width: "30px", height: "30px" }} />
        <Typography variant="caption">{props.title}</Typography>
      </div>
    </Grid>
  );
}

export default TechAvatar;
