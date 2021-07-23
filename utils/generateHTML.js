const createManager = function (manager) {
  return `<div class="col-sm d-flex">

    <div class="card card-body flex-fill">
    
      <h5 class="card-title">${manager.name}</h5>
      <h5 class="card-text">${manager.getRole()}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${manager.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${manager.email}">${manager.email}</li>
        <li class="list-group-item">Office Number:${manager.officeNumber}</li>
      </ul>
    </div>
    </div>`
}

const createIntern = function (intern) {
  return `<div class="col-sm d-flex">
  <div class="card card-body flex-fill">
      <h5 class="card-title">${intern.name}</h5>
       <h5 class="card-text">${intern.getRole()}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${intern.id}</li>
      <li class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</li>
      <li class="list-group-item">School:${intern.school}</li>
    </ul>
  </div>


</div>`
}

const createEngineer = function (engineer) {
  return `<div class="col-sm d-flex">

  <div class="card card-body flex-fill">
    <h5 class="card-title">${engineer.name}</h5>
     <h5 class="card-text">${engineer.getRole()}</h5>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${engineer.id}</li>
      <li class="list-group-item">Email:<a href="mailto:${engineer.email}">${engineer.email}</li>
      <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
  </div>


</div>`
}


function generateHTML(team) {

  const managerArray = [];
  const internArray = [];
  const engineerArray = [];

  for (let i = 0; i < team.length; i++) {
    let employee = team[i];
    let role = employee.getRole();

    switch (role) {
      case "Manager":
        managerArray.push(createManager(employee))
        break;

      case "Intern":
        internArray.push(createIntern(employee))
        break;

      case "Engineer":
        engineerArray.push(createEngineer(employee))
        break;
    }
  }

  return `<!doctype html>
  <html lang="en">
  
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Employees</title>
  
    <link rel="stylesheet" href="./output/style.css">
  </head>
  
  <body>
    <header>
      <nav class="navbar">
        <div class="container-fluid text-center">
          <span class="navbar-brand h1">Navbar</span>
        </div>
      </nav>
    </header>
  
    <div class="container-fluid">
      <div class="row">
  ${engineerArray.join('')}
  ${managerArray.join('')}
  ${internArray.join('')}

  </div>
  </div>

  
      
    </div>
  </div>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"></script> 
</body>

</html>`
}

module.exports = generateHTML;