const Intern = require("../lib/Intern");


it("should return school via Intern constructor",() =>{
    const SchoolValue = "Mekelle University";
    const obj= new Intern("Siba", 4,"email@email.com","Mekelle University");
    expect(obj.SchoolValue).toBe(SchoolValue);
});