// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const colors = require("colors");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your title name?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your application?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the instructions to install this app?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information for this app?",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose a license...",
    name: "license",
    choices: ["GNU AGPLv3", "MIT License", "Apache License 2.0"],
  },
  {
    type: "badges",
    message: "What are the contribution guidelines?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "questions",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "questions1",
  },
];

// TODO: Create a function to write README file
function writeToFile(README, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (prompt) {
    // generateMarkdown(prompt)
    fs.writeFile("README.md", generateMarkdown(prompt), (err) =>
      err ? console.log(err) : console.log("Success")
    );
    console.log(prompt);
  });
}

// Function call to initialize app
init();

// var x = "Hello!";

// // console.log(x)

// function y (z) {
//   console.log("Z: ", z)
// }

// var p = "Dennis"

// y(p)
