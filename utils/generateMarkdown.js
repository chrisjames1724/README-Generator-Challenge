// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3")
    return "!https://img.shields.io/badge/License-GNU_AGPLv3-blue";
  else if (license === "MIT License")
    return "https://img.shields.io/badge/License-MIT-blue";
  else if (license === "Apache License 2.0")
    return "https://img.shields.io/badge/License-MIT-blue";
  GET(/badge/, badgeContent);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3")
    return "https://choosealicense.com/licenses/agpl-3.0/";
  else if (license === "MIT License")
    return "https://choosealicense.com/licenses/mit/";
  license === "Apache License2.0";
  return "https://choosealicense.com/licenses/apache-2.0/";

  console.log(license);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("DATA: ", data.title);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
${data.tableofcontents} 

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}
${renderLicenseLink(data.license)}


## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
github.com/${data.questions}

Reach out for more questions by emailing me @ ${data.questions1}
`;
}

module.exports = generateMarkdown;
