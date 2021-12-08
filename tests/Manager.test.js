const Manager = require("../lib/Manager");
 
 test("Can instantiate Manager instance", () => {
   const e = new Manager();
   expect(typeof(e)).toBe("object");
 });
 
 test("Can set office number via constructor arguments", () => {
   const OfficeNumber = "101";
   const e = new Manager("Alice", 1, "test@test.com",OfficeNumber);
   expect(e.OfficeNumber).toBe(OfficeNumber);
 });
 
 test("Can get office number via getOfficeNumber()", () => {
   const testValue = "Alice12";
   const e = new Manager("Alice", 1, "test@test.com", testValue);
   expect(e.getOfficeNumber()).toBe(testValue);
 });
 
 test("getRole() should return \"Manager\"", () => {
   const testValue = "Manager";
   const e = new Manager("Alice", 1, "test@test.com", "101");
   expect(e.getRole()).toBe(testValue);
 });
