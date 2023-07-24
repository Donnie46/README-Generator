// TODO: Smile. You are enough.

//returns a license badge based on which license is passed in

function renderLicenseBadge(data) {
  if (data.license === "None") {
    return "";
  } else {
    return "![](https://img.shields.io/badge/license-" + data.license + "-ff69b4)";
  };
};

function renderLicenseToC(data) {
  var licenseToC = "- [License](#License)";
  var questionsToC = "- [Questions](#Questions)";
  if (data.license === "None") {
    return questionsToC;
  } else {
    return licenseToC + "\n" + questionsToC;
  }
}


// returns the license section of README

function renderLicenseSection(data) {
  var heading = "## License";
  var body = data.license;
  if (body === "MIT") {
    return heading + "\n\n" + body + " - [Click here to see a copy of the MIT license](https://www.mit.edu/~amini/LICENSE.md)";
  } else if (body === "GNU") {
    return heading + "\n\n" + body + " - [Click here to see a copy of the GNU Public license version 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)";
  } else if (body === "Apache") {
    return heading + "\n\n" + body + " - [Click here to see a copy of the Apache license 2.0](https://www.apache.org/licenses/LICENSE-2.0)";
  } else {
    return "";
  };
};

// generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data)}
  
## Description
  
${data.description}
  
## Contents
  
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
${renderLicenseToC(data)}
  
## Installation
  
${data.install}
  
## Usage
  
${data.usage}
  
## Contributing
  
${data.contribute}
  
## Tests
  
${data.tests}

${renderLicenseSection(data)}
  
## Questions

If you have any questions, feel free to reach out:

- [${data.github}](https://github.com/${data.github})
- [${data.email}](mailto:${data.email}?subject=[GitHub]%20README.md%20Generator%20Question)
`;
}

module.exports = generateMarkdown;
