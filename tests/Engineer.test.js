const Engineer = require("../lib/Engineer");
 
 test("Can instantiate Engineer instance", () => {
   const e = new Engineer();
   expect(typeof(e)).toBe("object");
 });
 
 test("Can set github via constructor arguments", () => {
   const github = "Alice1";
   const e = new Engineer("Alice", 1, "test@test.com", github);
   expect(e.github).toBe(github);
 });
 
 test("Can get github via getGithub()", () => {
   const testValue = "Alice12";
   const e = new Engineer("Alice", 1, "test@test.com", testValue);
   expect(e.getGithub()).toBe(testValue);
 });
 
 test("getRole() should return \"Engineer\"", () => {
   const testValue = "Engineer";
   const e = new Engineer("Alice", 1, "test@test.com", "Alice123");
   expect(e.getRole()).toBe(testValue);
 });
