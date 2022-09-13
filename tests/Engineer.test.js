const Engineer = require("../lib/Engineer");



it("should return a new 'Engineer' object", () =>{
    const GitValue ="github";
    const obj= new Engineer("siba",4,"email@email.com", GitValue);
    expect(obj.GitValue).tobe(true);
});

it(" should return \"Engineer\"",() =>{
    const GetRole = "Engineer";
    const obj= new Engineer("siba", 4,"email@email.com","github",GetRole);
    expect(obj.GetRole).toBe(GetRole);

})