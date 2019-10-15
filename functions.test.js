const functions = require("./functions");


test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Should be null", () => {
    expect( functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
    expect( functions.checkValue(0)).toBeFalsy();
});

test("User should be william Rabopape object", () => {
    expect( functions.createUser()).toEqual({
        firstName :'William',
        lastName :'Rabopape'
    });
});


test("Should be less than 1600",()=>{
    const load1=800;
    const load2=700;
    expect(load1+load2).toBeLessThan(1600);
})

test("Admin should be in user name",()=>{
    users=['john','karen','admin'];

    expect(users).toContain('admin');
})

