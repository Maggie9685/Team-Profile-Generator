const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
  constructor (name, id, email, OfficeNumber) {
      super(name, id, email);
      this.OfficeNumber = OfficeNumber;
    }

    getOfficeNumber () {
      if(!this.OfficeNumber){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'OfficeNumber',
                message: 'Office Number: ',
                validate: OfficeNumberInput => {
                  if (OfficeNumberInput) {
                    return true;
                  } else {
                    console.log('Please enter office number!');
                    return false;
                  }
                }
            }]).then((answers) => {
              this.OfficeNumber = answers.OfficeNumber;
            })
      }
      return this.OfficeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;