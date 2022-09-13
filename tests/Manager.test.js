const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


it("it should return Manager via getRole()", () =>{
    const input ="Manager";
    const obj= new Manager("Siba",4,"email@email.com", input);
    expect(obj.getRole()).toBe(input);
});

it ("returns office number via getOfficeNumber()", ()=>{
    const input = 50;
    const obj = new Manager("Siba",4,"email@email.com",input );
});