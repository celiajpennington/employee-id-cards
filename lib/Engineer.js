// import Employee class
const Employee = require("./Employee");

// create Engineer which extends Employee

class Engineer extends Employee {
    //create a constructor function that takes in name, id, email, github
    constructor(name, id, email, github) {
        //use super method to pass name, id, email vehi
        super(name, id, email);
        //and sets them as properties of employee //such as this.github= github
        this.github = github;
    }
    // getRole(){}
    getRole() {
        return "Engineer";
    }
    // getGithub(){}
    getGithub() {
        return this.github;
    }

}
// export Engineer
module.exports = Engineer;


