/**
 * README Wizard!
 * Invoke the Wizard by writing `node index.js` in your console
 */
var fs = require("fs");
var inquirer = require("inquirer");
var gm = require("./utils/generateMarkdown")
// array of questions for user
const questions = [{
    type: "input",
    name: "title",
    message: "Enter your project title:"
  },
  // * Description
  {
    type: "input",
    name: "description",
    message: "A short description explaining the what, why, and how. What was your motivation? Why did you build this project? What problem does it solve?"
  },
  // * Installation
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
  },
  // * Usage
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use"
  },
  // * License
  {
    type: "list",
    name: "license",
    message: "The last section of a good README is a license. This lets other developers know what they can and cannot do with your project.",
    choices: ["MIT", "GNU general public v3.0", "Apache 2.0"]
  },
  // * Contributing
  {
    type: "list",
    name: "contributing",
    message: "If you created something and would like other developers to contribute to it, you will want to add guidelines for how to do so.",
    choices: ["Contributor Covenant", "I want to make my own."]
  },
  // * Tests
  {
    type: "input",
    name: "tests",
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them."
  },
  // * Questions
  {
    type: "input",
    name: "userName",
    message: "Please enter your github user name:"
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:"
  }
];

// function to write README file
function writeToFile(data) {
  fs.writeFile("newReadMe.md", data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Your file has been written.");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(resp => {
      var temp = gm.generateMarkdown(resp);
      writeToFile(temp);
    })
}

// function call to initialize program
init();