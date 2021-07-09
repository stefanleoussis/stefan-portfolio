import { Avatar, Grid, Typography } from "@material-ui/core";
import React from "react";
import img1 from "../images/img1.jpg";
function TechAvatar(props) {
  return (
    <Grid item container direction="column" style={{ width: "70px" }}>
      <Avatar
        src={img1}
        style={{ marginLeft: "15px", width: "30px", height: "30px" }}
      />
      <Typography variant="caption">TypeScript</Typography>
    </Grid>
  );
}

export default TechAvatar;
