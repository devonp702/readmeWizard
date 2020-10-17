// function to generate markdown for README
function generateMarkdown(data) {
  var licence = data.licence;

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
  ## Contributing
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
