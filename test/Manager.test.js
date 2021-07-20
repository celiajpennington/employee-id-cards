//require Manager 

const Manager = require("../lib/Manager");

//create test on manager class

//test to see if you can set officeNumber using our constructor
test("Can set office number using constructor", () => {
const testValue = 5;
const e = new Manager("Foo", 1, 'test@test.com', testValue);
expect(e.officeNumber).toBe(testValue);
})

//test to see if  getRole()  returns officeNumber test value
test("getRole() should return \"Manager\"", () => {
const testValue = "Manager"  ;
const e = new Manager("Foo", 1, "test@test.com", 5124685740);
expect(e.getRole()).toBe(testValue);
});


//test to see if getOfficeNumber() returns number
test("Can getOfficeNumber () return the office number", () => {
const testValue = 5;
const e = new Engineer("Foo", 1, "test@test.com", testValue);
expect(e.getOfficeNumber()).toBe(testValue);
});
