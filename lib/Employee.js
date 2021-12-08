const inquirer = require('inquirer');

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
      if(!this.name){
        return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name: ',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter name!');
                return false;
              }
            }
        }]).then((answers) => {
          this.name = answers.name;
        })
      }
      return this.name;
    }

    getId() {
      if(!this.id){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'ID: ',
                validate: idInput => {
                  if (idInput) {
                    return true;
                  } else {
                    console.log('Please enter ID!');
                    return false;
                  }
                }
            }]).then((answers) => {
              this.id = answers.id;
            })
        }
        return this.id;
    }

    getEmail() {
      if(!this.email){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'email',
                message: 'Email: ',
                validate: emailInput => {
                  if (emailInput) {
                    return true;
                  } else {
                    console.log('Please enter email!');
                    return false;
                  }
                }
            }]).then((answers) => {
              this.email = answers.email;
            })
      }
      return this.email;
    }

    getRole() {
        return "Employee";
    }
}


module.exports = Employee;



