import pythonLogo from "../assets/pythonLogo.png";
import flaskLogo from "../assets/flaskLogo.png";
import sqliteLogo from "../assets/sqliteLogo.png";
import mongoDBLogo from "../assets/mongoDBLogo.png";
import expressLogo from "../assets/expressLogo.png";
import reactLogo from "../assets/reactLogo.png";
import nodeLogo from "../assets/nodeLogo.png";
import typescriptLogo from "../assets/typescriptLogo.png";
import webapi from "../assets/webapi.png";
import messenger from "../assets/messenger.jpg";
import chatbot from "../assets/chatbot.jpeg";
export const projectCardData = [
  {
    title: "Messenger",
    image: messenger,
    desc: `A Full-Stack MERN Project that allows users who speak completly different
    languages to communicate with eachother.`,
    githubLink: `https://github.com/hatchways/team-fuji`,
    techstack: [
      { title: "MongoDB", logo: mongoDBLogo },
      { title: "Express.js", logo: expressLogo },
      { title: "React.js", logo: reactLogo },
      { title: "Node.js", logo: nodeLogo },
      { title: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Chatbot",
    image: chatbot,
    desc: `Built on the Flask framework, a conversational bot that is trained 
through hundreds of Chatter-bot Trainer libraries. It gives well-calculated 
responses to general questions and common conver-sational topics.`,
    githubLink: `https://github.com/stefanleoussis/Chatbot-Flask-Python`,
    techstack: [
      { title: "Python", logo: pythonLogo },
      { title: "Flask", logo: flaskLogo },
    ],
  },
  {
    title: "Web API",
    image: webapi,
    desc: `Built on the Flask framework, a Python Web API that retrieves 
      information on the last 67 Hugo Book Winners. Implemented custom query filtering and while following REST API standards.`,
    githubLink: `https://github.com/stefanleoussis/Web-API-Python`,
    techstack: [
      { title: "Python", logo: pythonLogo },
      { title: "Flask", logo: flaskLogo },
      { title: "SQLite", logo: sqliteLogo },
    ],
  },
];
