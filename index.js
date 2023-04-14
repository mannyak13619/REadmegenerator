// TODO: Include packages needed for this application
const inquirer=require("inquirer")
const fs=require("fs")
var generateMarkdown=require("./utils/generateMarkdown")
const { default: Choices } = require("inquirer/lib/objects/choices")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"projectTitle",
        message:"what is the name of project?"
    },
    {

        type:"input",
        name:"github",
        message:"what is your github user name??"
    },
   
    {

        type:"input",
        name:"email",
        message:"what is you e-mail address?",
    },
    {

        type:"list",
        name:"license",
        message:"choose a licen",
        choices:["MIT","bsd-2-clause","apache-2.0",]
    },
    {

        type:"input",
        name:"change",
        message:"change",
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(titleName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        fs.writeFileSync("readme.md",generateMarkdown(answers))
       console.log(answers) 
    })
}

// Function call to initialize app
init();

