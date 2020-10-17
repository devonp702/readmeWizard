// function to generate markdown for README
function generateMarkdown(data) {
  var license = data.license;
  var contributing = data.contributing;
  var lSection =`
  * I am using the ${license} license. 
  ![license](https://img.shields.io/badge/license-${license}-green)
  `
  if (contributing === "Contributor Covenant"){
  var cSection = `This Code of Conduct is adapted from the [Contributor Covenant][homepage],
  version 2.0, available at
  https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.`
  } else {
    cSection=`Please view my other documentation for my contribution guidelines.`
  }

  return `# ${data.title}

  [link](http://github.com/${data.userName}/${data.title})

  ![Include a screenshot](screenshot.jpg)

  ## Table of Contents
* [Introduction](#introduction)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

  ## Introduction
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ## License
  ${lSection}
  ## Contributing
  ${cSection}
  ## Tests
  ${data.tests}
  ## Questions
  Thanks for taking the time to look at my project.
  If you would like to ask me any questions, please contact me.
  * On Github, User Name : ${data.userName}
  * eMail me: ${data.email}
`
}

module.exports ={generateMarkdown: generateMarkdown}
