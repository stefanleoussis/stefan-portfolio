import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ProjectDialog from "./ProjectDialog";
import { Box } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 345,
    marginBottom: "20px",
  },
});

/*eslint quote-props: ["error", "as-needed"]*/
/*eslint-env es6*/
const cardContent = {
  Messenger: `A Full-Stack MERN Project that allows users who speak completly different
  languages to communicate with eachother...`,
  Chatbot: `Built on the Flask framework, a conversational bot that is trained 
  through hundreds of Chatter-bot Trainer libraries. It gives well-calculated 
  responses to general questions and common conver-sational topics...`,
  "Web API": `Built on the Flask framework, a Python Web API that retrieves 
  information on the last 67 Hugo Book Winners. Implemented custom query filtering and while following REST API standards...`,
};

export default function ProjectCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  // const url =
  // '<div style="width:100%;height:0;padding-bottom:105%;position:relative;"><iframe src="https://giphy.com/embed/camWCqkBp46tbAi5WO" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/camWCqkBp46tbAi5WO">via GIPHY</a></p>';
  const handleClose = () => {
    console.log("yes");
    setOpen(false);
  };
  return (
    <Box>
      <Card className={classes.root} onClick={() => handleClickOpen()}>
        <CardActionArea style={{ outline: "none" }}>
          <CardMedia
            image={props.data.image}
            title="project image"
            style={{ height: "100px" }}
          />
          <CardContent style={{ paddingBottom: "100%" }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {cardContent[props.data.title]
                ? cardContent[props.data.title]
                : "You can Checkout this Project on my Github @ https://github.com/stefanleoussis"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <ProjectDialog open={open} onClose={handleClose} data={props.data} />
    </Box>
  );
}
