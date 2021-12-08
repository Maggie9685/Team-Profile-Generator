const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
  constructor (name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }

    getschool () {
      if(!this.school){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: 'School: ',
                validate: SchoolInput => {
                  if (SchoolInput) {
                    return true;
                  } else {
                    console.log('Please enter school!');
                    return false;
                  }
                }
            }]).then((answers) => {
              this.school = answers.school;
            })
          }
          return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;