import { Avatar, Grid, Typography } from "@material-ui/core";
import React from "react";
import img1 from "../assets/img1.jpg";
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
        <Avatar src={img1} style={{ width: "30px", height: "30px" }} />
        <Typography variant="caption">{props.title}</Typography>
      </div>
    </Grid>
  );
}

export default TechAvatar;
