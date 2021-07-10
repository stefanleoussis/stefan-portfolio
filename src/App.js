import "./App.css";
import { Grid } from "@material-ui/core";
import ProjectCard from "./components/ProjectCard";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import React from "react";

function App() {
  return (
    <div className="App" style={{ fontSize: 20 }}>
      <Grid container direction="row" justifyContent="space-between">
        <ProjectCard title="Messenger" imgURL={img1} />
        <ProjectCard title="Chatbot" imgURL={img2} />
        <ProjectCard title="Web Api" imgURL={img3} />
      </Grid>
    </div>
  );
}

export default App;
