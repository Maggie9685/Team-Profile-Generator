const Intern = require("../lib/Intern");
 
 test("Can instantiate Intern instance", () => {
   const e = new Intern();
   expect(typeof(e)).toBe("object");
 });
 
 test("Can set school via constructor arguments", () => {
   const school = "UC Davis";
   const e = new Intern("Alice", 1, "test@test.com", school);
   expect(e.school).toBe(school);
 });
 
 test("Can get school via getschool()", () => {
   const testValue = "UC Davis";
   const e = new Intern("Alice", 1, "test@test.com", testValue);
   expect(e.getschool()).toBe(testValue);
 });
 
 test("getRole() should return \"Intern\"", () => {
   const testValue = "Intern";
   const e = new Intern("Alice", 1, "test@test.com", "UC Davis");
   expect(e.getRole()).toBe(testValue);
 });
