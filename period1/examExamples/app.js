// Variable hoisting
// Good practice declare all your variables at the beginning of every scope.
//You can declare a variable after it been used. 
function varHoistEx1() {
x = 5;

console.log(x);

var x;
}
varHoistEx1();
//This is the same

function varHoistEx2() {
var x 
x = 5

console.log(x);
};
varHoistEx2();
//JavaScript only hoist declaretions and not intailization.

function intailHoist() {
var x = 5; // Initialize x

console.log(x + " " + y);           // Display x and y

var y = 7; // Initialize y
}
intailHoist();

//*************** Closures******************
//JavaScript variables can belong to the local or global scope.
//Global variables can be made local (private) with closures.
//Webpage - global variables belong to the window object 

function myFunction() {
    var a = 4;                                      // a is a local variable, hidden from other functions, die when the function is finished
    return a * a;
}

var a = 4;                                          // a is a global variable, lives as long you application does
function myFunction() { 
   
    return a * a;
}

//Emulates private methods 
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {changeBy(1);},
    decrement: function() {changeBy(-1);},
    value: function() { return privateCounter;}
  }
};
var counter = makeCounter();
counter.increment();
counter.increment();
console.log(counter.value());

//**************IIFE*****************
//Stops pollution of global enviroment.

(function(){
  var txt = "Hello World";
  console.log(txt);  
})();;

//console.log(txt);


//********Prototypes********************
//Prototypes are like objects. ONLY modity your OWN prototypes.

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
}; 

var myFather = new Person("John", "Doe", 50, "blue");

//******** User defined Callbacks *************

function doSomething(callback) {
    // ...

    // Call the callback
    callback('stuff', 'goes', 'here');
}

function foo(a, b, c) {
    // I'm the callback
    console.log(a + " " + b + " " + c);
}

doSomething(foo);

//Example 2 - map (Higher-order function)
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

let namesMyMap = names.map(function(name) {
    return name.toUpperCase();
});

console.log(namesMyMap);

//**********Resuable Modules in Node JS ****************/


module.exports = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {changeBy(1);},
    decrement: function() {changeBy(-1);},
    value: function() { return privateCounter;}
  }
};

//******************es2005********************

//destructering
var foo = {
    bar: 1,
    baz: 2
};

var { bar, baz } = foo;

console.log("bar :" + bar);

//arrow functions

var foo = function(a, b) { // no arrow
    return a + b;
}

var foo = (a, b) => { // with arrow
    return a + b;
}

// Block scpe - let

var a = 1;
//const for a variable not change - block scoped
//let when change - block scoped. 
if(true) {
    var b = 2; //let, const block
    const bar = { a: 1};
}
console.log(b);

//module export

export function foo() { // new way
     
}

export var foo = 3;


export default {

};

//in another file

import myModule from "myModule";