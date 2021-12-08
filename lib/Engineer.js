const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor (name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }

    getGithub () {
      if(!this.github){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'GitHub username: ',
                validate: githubInput => {
                  if (githubInput) {
                    return true;
                  } else {
                    console.log('Please enter GitHub username!');
                    return false;
                  }
                }
            }]).then((answers) => {
              this.github = answers.github;
            })
      }
      return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;