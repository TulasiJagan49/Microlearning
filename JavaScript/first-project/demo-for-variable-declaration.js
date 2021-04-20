// This file is demo for variable declaration.

// var - function scope, can be changed, available before initialization.

console.log(`Before assigning a value: ${hello}`);

var hello = "Hello World";

console.log(`After assigning a value: ${hello}`);

// let - block scope, can be changed, not available outside of scope.

if (true) {
    // console.log(`let Example: ${name}`); - Will give a reference error.
    let name = "TulasiJagan";
    console.log(`let Example: ${name}`);
    name = "Tulasi";
    console.log(`Let Example after re-assigning: ${name}`);
}

// console.log(`let Example: ${name}`); - Will give a reference error.

// const - block scope, cannot be changed, not available outside of scope.

// console.log(`const Example: ${number}`); - Will give a reference error.

const number = 5;

console.log(`const Example: ${number}`);

// number = 6; will give TypeError.

// Note: A statement can be ended with a semicolon, but it is not a compulsion to follow.