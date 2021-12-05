// Write your solution in this file!
 const employee = {
     name: "Sam",
     streetAddress: "11 Broadway",
 };

 function updateEmployeeWithKeyAndValue (employee, name, streetAddress) {
     const newEmploye = {...employee};
     return newEmploye;
 };

 function destructivelyUpdateEmployeeWithKeyAndValue (employee, streetAddress, value) {
     employee.streetAddress = "12 Broadway";
     return employee;
 };

 function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name
    return newEmployee;
 };

 function destructivelyDeleteFromEmployeeByKey (employee, key) {
     employee.name = undefined
     return employee
 };