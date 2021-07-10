import "./App.css";
import { Grid } from "@material-ui/core";
import ProjectCard from "./components/ProjectCard";
import React from "react";
import { projectCardData } from "constants/ProjectCardData";
import img1 from "./assets/img1.jpg";

function App() {
  return (
    <div className="App" style={{ fontSize: 20 }}>
      <Grid container direction="row" justifyContent="space-between">
        {projectCardData.map((project) => {
          return <ProjectCard data={project} imgURL={img1} />;
        })}
      </Grid>
    </div>
  );
}

export default App;
