const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
var team = [];
var count = 0;

const GetChoice = () => {
        inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "Is there any more employee you want to add?",
            choices: ["Engineer", "Intern", "That's all"]
        }]).then ( (answer) => {
            if(answer.type != "That's all") { 
                count++;
                if(answer.type === "Engineer") {
                    team.push(new Engineer());
                    team[count].getName()
                    .then(() => 
                        team[count].getId())
                    .then(() => 
                        team[count].getEmail())
                    .then(() => 
                        team[count].getGithub())
                    .then(() => 
                        GetChoice())
                }
                if(answer.type === "Intern") {
                    team.push(new Intern());
                    team[count].getName()
                    .then(() => 
                        team[count].getId())
                    .then(() => 
                        team[count].getEmail())
                    .then(() => 
                        team[count].getschool())
                    .then(() => 
                        GetChoice())
                }
            }else { //stop the loop
                return answer;
            }})
            .then(() => 
                generateHTML(team, count)
            )
            .then(HTMLFile => {
                return writeToFile(HTMLFile);
                })
            .catch(err => {
                console.log(err);}); 
}

const init = () => {
    console.log("Please build your team. \n Let's enter team manager information.");
    count = 0;

    team.push(new Manager());
    
    team[count].getName()
    .then(() => 
        team[count].getId())
    .then(() => 
        team[count].getEmail())
    .then(() => 
        team[count].getOfficeNumber())
    .then(() => 
        GetChoice());
    
};

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};  


// To start the app
init();
