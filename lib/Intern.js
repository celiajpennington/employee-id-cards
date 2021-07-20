// import Employee class
const Employee = require("./Employee");
// create Intern which extends Employee
class Intern extends Employee {
//create a constructor function that takes in name, id, email, school
constructor(name, id, email, school) {
//use super metheod to pass name, id, email
super(name, id, email);
this.school = school;
}
// getRole(){}
getRole() {
return "Intern";
}
getSchool (){
return this.school;
}
}
// export Intern
module.exports = Intern;

