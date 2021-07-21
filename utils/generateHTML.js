const generateHTML = (team) => {

    const createManager = function(manager) {
        return `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h4 class=" employeeName card-title">${manager.getName()}</h4>
  <h5 class=" employeeRole card-text">${manager.getRole()}</h5>
</div>
<ul class=" employeeDetails list-group list-group-flush">
  <li class="list-group-item">${manager.getId()}</li>
  <li class="list-group-item">${manager.getEmail()}</li>
  <li class="list-group-item">${manager.getOfficeNumber()}</li>
</ul>
</div>`
    }

    const createEngineer = function(engineer) {
            return `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h4 class=" employeeName card-title">${engineer.getName()}</h4>
  <h5 class=" employeeRole card-text">${engineer.getRole()}</h5>
</div>
<ul class=" employeeDetails list-group list-group-flush">
  <li class="list-group-item">${engineer.getId()}</li>
  <li class="list-group-item">${engineer.getEmail()}</li>
  <li class="list-group-item">${engineer.getGithub()}</li>
</ul>
</div>`
        }
        //do I need to add a href to email to create a link- I think they want to use a mailTo:
    const createIntern = function(Intern) {
        return `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h4 class=" employeeName card-title">${intern.getName()}</h4>
  <h5 class=" employeeRole card-text">${intern.getRole()}</h5>
</div>
<ul class=" employeeDetails list-group list-group-flush">
  <li class="list-group-item">${intern.getId()}</li>
  <li class="list-group-item">${intern.getEmail()}</li>
  <li class="list-group-item">${intern.getSchool()}</li> 
</ul>
</div>`
    }


    const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    return html.join("");
}

module.export = team => {
    return `
    <!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href = "./FinalHTML/reset.css" rel="stylesheet">
    <link href = "./FinalHTML/style.css" rel="stylesheet">
    <title>Employees</title>
</head>
<header>
    <h1>My Team</h1>
</header>
<body>
  
${createTeamCards(team)} 
</body>
</html>`
}