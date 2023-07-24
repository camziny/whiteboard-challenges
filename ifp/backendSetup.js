// cd server

// initialize node package
// npm init -y

// install libraries
// npm install express cors dotenv mongoose mongodb nodemon
// using express servers
// cors for sharing data between domains
// dotenv allows us to create environment variables
// mongoose to connect express servers with mongodb
// morgan to log every request in the console
// nodemon will restart server anytime we make a change

// server.js file

import express from "express";
import cors from "cors";
import router from "/router/routes";

const app = express();

app.use(cors());
app.use(express.json());
config();

const port = process.env.PORT || 3000;

// routes

app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("get request");
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, () => {
  console.log(`server connected to http://localhost:${port}`);
});

// add start script
// "start": "nodemon server.js"

// add PORT to environment variable
// PORT = 3000;

// git init to initialize server as git repo
// create .gitignore in root directory of server

// create folder named router
// create file within router names routes.js
import { Router } from "express";
const router = Router();

// Questions Routes

router.get("/questions", (req, res) => {
  res.json("questions api get request");
});

export default router;

// User Model

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Scenario = sequelize.define("sequelize", {
  quiz: {
    type: DataTypes.String,
    allowNull: false,
  },
});

const Quiz = sequelize.define("sequelize", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Question = sequelize.define("sequelize", {
  title: {
    type: DataTypes.STRING,
  },
  answerOne: {
    type: DataTypes.STRING,
  },
});
