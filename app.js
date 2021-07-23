///require classes and inquirer and fs

const team = []
    //package native to node for resolving path
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/Employee")
const Engineer = require('./lib/Engineer');
const Intern = require("./lib/Intern");
const Manager = require('./lib/Manager');
const generateHTML = require("./utils/generateHTML")
    //determine current directory and find path to the output folder 




function newManager() {
    inquirer
        .prompt([{
                type: "input",
                message: "Enter the manager's name",
                name: "name"
            },
            {
                type: "input",
                message: "Enter the manager's employee ID",
                name: "id"
            },
            {
                type: "input",
                message: "Enter the manager's email",
                name: "email"
            },
            {
                type: "input",
                message: "Enter the manager's office phone number",
                name: "officeNumber"
            },
        ])
        .then((response) => {
            let managerName = response.name;
            let managerID = response.id;
            let managerEmail = response.email;
            let managerPhone = response.officeNumber;

            let manager = new Manager(managerName, managerID, managerEmail, managerPhone);
            team.push(manager);
            newEmployee();
        })
}

function newEmployee() {
    inquirer
        .prompt([{
                type: "list",
                message: 'Is this new employee an Engineer or Intern?',
                name: 'role',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                message: "Enter the employee's name",
                name: 'name'
            },
            {
                type: 'input',
                message: "Enter the employee's ID",
                name: 'id'
            },
            {
                type: 'input',
                message: "Enter the employee's email",
                name: 'email'
            },
            {
                type: 'input',
                message: "Enter the employee's github username",
                when: (list) => list.role == "Engineer",
                name: "github"
            },
            {
                type: 'input',
                message: "Enter the employee's school",
                when: (list) => list.role == "Intern",
                name: "school"
            },
            {
                type: 'confirm',
                message: "Would you like to add another employee?",
                name: 'add'
            },

        ])

    .then((response) => {
        let employeeName = response.name;
        let employeeId = response.id;
        let email = response.email;
        if (response.role == "Intern") {
            let school = response.school;
            let intern = new Intern(employeeName, employeeId, email, school);
            team.push(intern);
        } else if (response.role == "Engineer") {
            let github = response.github;
            let engineer = new Engineer(employeeName, employeeId, email, github)
            team.push(engineer);
        }
        if (response.add == true) { newEmployee(); } else { createHTML(); }
    })
}
const createHTML = () => {
    fs.writeFile("test8.html", generateHTML(team), (err) => {
        err ? console.log("This has not worked") : console.log('a new HTML file has been created for you!')
    })
}
newManager();