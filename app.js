///require classes and inquirer and fs

//package native to node for resolving path
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/Employee")
const Engineer = require('./lib/Engineer');
const Intern = require("./lib/Intern");
const Manager = require('./lib/Manager');
const generateHTML = require("./utils/gengit commiterateHTML")
    //determine current directory and find path to the output folder 


const team = [];

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
    fs.writeFile("test.html", generateHTML(team), (err) => {
        err ? console.log("This has not worked") : console.log('a new HTML file has been created for you!')
    })
}
newManager();
//new employee

//is employee engineer or intern

//Would you like to add another employee

//when: (list) => list.role == "Engineer"
//determine current directory and find path to the output folder 
//const OUTPUT_DIR = path.resolve(__dirname, "output")
//where to create our output
//const outputPath = path.join(OUTPUT_DIR, "team.html");

//require render function from the page template
//const render = require("./src/page-template.js");

//use inquirer to determine what kind of employee you will be adding or to exit and build html
//based on the reponse trigger another inquire block
// use answers to create a "new Employee" and add the employee to the 
//teamMembers array
//

//function buildTeam() {
// Create the output directory if the output path doesn't exist
//if (!fs.existsSync(OUTPUT_DIR)) {
// fs.mkdirSync(OUTPUT_DIR)
//}
//write html to output/team.html using function exported from page-template.js
//fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
//}