// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3")
    return "![GNU AGPLv3 Badge](https://img.shields.io/badge/License-GNU_AGPLv3-blue)";
  else if (license === "MIT License")
    return "![MIT Badge](https://img.shields.io/badge/License-MIT-blue)";
  else if (license === "Apache License 2.0")
    return "![Apache 2.0](https://img.shields.io/badge/License-Apache-blue)";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3")
    return "[GNU AGPLv3 License](https://choosealicense.com/licenses/agpl-3.0/)";
  else if (license === "MIT License")
    return "[MIT License](https://choosealicense.com/licenses/mit/)";
  license === "Apache License2.0";
  return "[Apache License2.0](https://choosealicense.com/licenses/apache-2.0/)";
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
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
More information about the license can be found using the following link ${renderLicenseLink(
    data.license
  )}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
[My GitHub Page](https://github.com/${data.questions})

Reach out for more questions by emailing me @ ${data.questions1}
`;
}

module.exports = generateMarkdown;
