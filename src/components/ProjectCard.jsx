import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ProjectDialog from "./ProjectDialog";
import React from "react";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 345,
  },
});

/*eslint quote-props: ["error", "as-needed"]*/
/*eslint-env es6*/
const cardContent = {
  Messenger: `A Full-Stack MERN Project that allows users who speak completly different
  languages to communicate with eachother`,
  Chatbot: `Built on the Flask framework, a conversational bot that is trained 
  through hundreds of Chatter-bot Trainer libraries. It gives well-calculated 
  responses to general questions and common conver-sational topics.`,
  "Web Api": `Built on the Flask framework, a Python Web API that retrieves 
  information on the last 67 Hugo Book Winners. Implemented custom query filtering and while following REST API standards.`,
};

export default function ProjectCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("yes");
    setOpen(false);
  };
  return (
    <Box>
      <Card className={classes.root} onClick={() => handleClickOpen()}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project Image"
            height="140"
            image={props.imgURL}
            title="Project Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {cardContent[props.title]
                ? cardContent[props.title]
                : "You can Checkout this Project on my Github @ https://github.com/stefanleoussis"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <ProjectDialog open={open} onClose={handleClose} />
    </Box>
  );
}
