import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React from "react";
import PropTypes from "prop-types";
import img1 from "../assets/img1.jpg";
import githubLogo from "../assets/githubLogo.png";
import TechAvatar from "./TechAvatar";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function ProjectDialog(props) {
  const classes = useStyles();
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
              <Typography variant="h2">Project Name</Typography>
              <Box height="30px" />
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
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
                <TechAvatar />
                <TechAvatar />
                <TechAvatar />
                <TechAvatar />
                <TechAvatar />
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
};

export default ProjectDialog;
