// TODO: Include packages needed for this application
const inquirer=require("inquirer")
const fs=require("fs")
var generateMarkdown=require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"projectTitle",
        message:"what is the name of project"
    },
    {

        type:"input",
        name:"projectTitle",
        message:"what is the name of project"
    },
    
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        fs.writeFileSync("readme.md",generateMarkdown(answers))
       console.log(answers) 
    })
}

// Function call to initialize app
init();

