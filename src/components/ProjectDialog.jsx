import {
  Box,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import img1 from "../assets/img1.jpg";
import githubLogo from "../assets/githubLogo.png";
import TechAvatar from "./TechAvatar";

function ProjectDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth={true}
      maxWidth={"lg"}
    >
      <DialogContent>
        <Grid container direction="column" style={{ height: "80vh" }}>
          <Grid item style={{ alignItems: "center" }}>
            <img src={img1} alt="" height="250px" width="100%" />
          </Grid>
          <Box height="30px" />
          <Grid item container direction="row">
            <Grid item sm={6}>
              <Typography variant="h2">{props.data.title}</Typography>
              <Box height="30px" />
              <Typography variant="body1">{props.data.desc}</Typography>
            </Grid>
            <Grid item container sm={6}>
              <Grid
                item
                container
                direction="row"
                style={{ paddingLeft: "100px", height: "40%" }}
              >
                <Grid item style={{ paddingTop: "10px" }}>
                  <Typography variant="h5">
                    <u>Tech Stack:</u>
                  </Typography>
                </Grid>
                <Box width="30px" />
                {/* // Here we will add a map of tech img and tech name and map them as avatars */}
                {props.data.techstack
                  ? props.data.techstack.map((item) => {
                      return <TechAvatar title={item.title} logo={item.logo} />;
                    })
                  : null}
              </Grid>
              <Box height="80%" />
              <Grid
                item
                style={{
                  paddingLeft: "20%",
                  width: "100%",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "black",
                    width: "400px",
                    height: "80px",
                    outline: "none",
                  }}
                  onClick={() => window.open(props.data.githubLink, "_blank")}
                >
                  <img src={githubLogo} alt="" width="60px" height="60px" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

ProjectDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
};

export default ProjectDialog;
