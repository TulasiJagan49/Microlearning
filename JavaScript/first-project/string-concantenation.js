// This is for practising string concantenation.

let str1 = "Hello";
let str2 = "World!";

console.log(str1 + str2);
console.log(str1 + "Big" + str2);

str1 = 'Hello '

console.log(str1 + str2)
console.log(str1 + 'Big ' + str2)

let num1 = 1;
let num2 = "1";
// Need to be careful while using plus operator between two variables.
// Always try to ensure the two variables are of same type.
console.log(num1 + num2);
console.log(num1 + 1);

// And formatting and concantetation is way more cool and easy with template literals.
let str3 = `JavaScript`
let bool = true;
console.log(`Learning ${str3} is fun and I'm not saying anything ${!bool} about this`);

