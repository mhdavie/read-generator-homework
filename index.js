// import libraries
    // first we require the library in a file - the internal and external tools
    // then we download 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// ask the questions using inquirer
    // inquirer has object formatting 
        // meaning it has key and value pairs inside an array of objects
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your application?'

    }
]
// write to file and create the file 
// function to write the README file from the given input
    // using writeTOfiLE method takes in two criteria, name of file and whatever gets inputted
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    // fs.writeFileSync(../fileName), data)
}

function init() {
    inquirer.prompt(questions).then((Responses) => {
        writeToFile('newREADME.md', generateMarkdown({ ...Responses}))
        // writeToFile(../fileName), data)
    })
}

init()

