const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const path = require('path');


const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'Team.html');

const render = require('./src/template.js');

const idArr = [];
const teamMembers = [];


function TeamBuilder() {
  function createManager() {

    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",

      },
      {
        type: 'input',
        name: 'Id',
        message: "What is the manager's id?",

      },
      {
        type: 'input',
        name: 'Email',
        message: "What is the manager's email?",

      },
      {
        type: 'input',
        name: 'OfficeNumber',
        message: "What is the manager's office number?",

      },
    ]).then((responses) => {
      const manager = new Manager(
        responses.name,
        responses.Id,
        responses.Email,
        responses.OfficeNumber
      );
      teamMembers.push(manager);
      idArr.push(responses.managerId);
      createTeam();
    });
  }

  function createTeam() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'teamChoice',
        message: 'Which team member would you like to add?',
        choices: [
          'Engineer',
          'Intern',
          "Exit",
        ],
      },
    ])
      .then((userinput) => {
        switch (userinput.teamChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: "What is the engineer's name?",

        },
        {
          type: 'input',
          name: 'Id',
          message: "What is the engineer's id?",

        },
        {
          type: 'input',
          name: 'Email',
          message: "What is the engineer's email address?",

        },
        {
          type: 'input',
          name: 'Github',
          message: "What is the engineer's GitHub username?",

        },
      ]).then((responses) => {
        const engineer = new Engineer(
          responses.name,
          responses.Id,
          responses.Email,
          responses.Github
        );
        teamMembers.push(engineer);
        idArr.push(responses.engineerId);
        createTeam();
      });
  }

  function addIntern() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",

      },
      {
        type: 'input',
        name: 'Id',
        message: "What is the intern's id?",

      },
      {
        type: 'input',
        name: 'Email',
        message: "What is the intern's email?",

      },
      {
        type: 'input',
        name: 'School',
        message: "What is the intern's school?",

      },
    ]).then((responses) => {
      const intern = new Intern(
        responses.name,
        responses.Id,
        responses.Email,
        responses.School
      );
      teamMembers.push(intern);
      idArr.push(responses.internId);
      createTeam();
    });
  }

  function buildTeam() {

    fs.writeFileSync(distPath, render(teamMembers));
  }

  createManager();
}

TeamBuilder();
