
const Employee = require("./Employee");


it("should return a new 'Employee' object", () =>{
    const obj= new Employee(siba);
    expect(obj instanceof Employee).tobe(true);
});

it(" can set id via Employee constructor", ()=>{
    const idd= 4;
    const obj= new Employee("siba", idd);
    expect(obj.idd).toBe(idd);

});

it("can set email via Employee constructor",() =>{
   const  emailValue ="email@email.com";
   const obj= new Employee("siba",  4, emailValue);
    expect(obj.emailValue).toBe(emailValue);
    
})