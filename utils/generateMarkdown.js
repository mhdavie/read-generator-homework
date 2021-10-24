// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// shields.io 
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [${data.description}](#${data.description})
  * [${data.Installation}](#${data.Installation})
  * [${data.usage}](#${data.usage})
  * [${data.license}](#${data.license})
  * [${data.respository}](#${data.repository})
  * [${data.link}](#${data.link})
  * [${data.image}](#${data.image})
  

## Installation
${data.Installation}

## Usage
${data.usage}

## License
${data.license}

## GitHub Repository
${data.repository}

## Deployed Link
${data.link}

##Apllication
${data.image}















`;
}

module.exports = generateMarkdown;