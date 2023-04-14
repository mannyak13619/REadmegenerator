// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
return `https://img.shields.io/badge/license-${license}-blue.svg`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://img.shields.io/badge/license-${license}-blue.svg`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `https://img.shields.io/badge/license-${license}-blue.svg`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle} 
  ${renderLicenseBadge(data.license)}

 # ${data.github}



//heading
//body 
//footer


`;
}

module.exports = generateMarkdown;
