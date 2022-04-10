// Code your solution here
function findMatching(driverArray, name) {
    return driverArray.filter(driverName => driverName.toLowerCase() === name.toLowerCase());
}
//Check if drivers name is the name  for our filter feature

function fuzzyMatch(driverArray, name) {
    return driverArray.filter(person => person[0].toLowerCase() === name[0].toLowerCase());
}
//Match first letter to access via index of string
function matchName(driverArray, name) {
    return driverArray.filter(personObject => personObject.name === name);
}
//Specify person as an object