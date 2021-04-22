// This file has the examples for checking out various data types in javascript.

// Number(float), string, boolean, function, array and object

const num = 1;
const str = "Tulasi Jagan"
const b = true
const arr = [1, "Tulasi Jagan", true];
const person = {
    firstName: "Tulasi",
    lastName: "Jagan"
}

function sayHello(person) {
    console.log(`Hi, there ${person.firstName} ${person.lastname}`);
}

console.log(`-----typeof------`);
console.log(typeof num);
console.log(typeof str);
console.log(typeof b);
console.log(typeof arr); // typeof gives the primitive types of javascript.
console.log(typeof person);
console.log(typeof sayHello);

console.log(`-----instanceof------`);
console.log(num instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(arr instanceof Array); 
console.log(person instanceof Object);
console.log(sayHello instanceof Function);

// Defining number, string and boolean would yield us true during the instanceof check
// But give the type as Object during typeof.