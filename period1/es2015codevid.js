//Part1
//template strings

var name = "Will";
var thing = "party";

var greet = `Hi my name is ${name} and I like to ${thing}`;

console.log(greet);

//destructuring

var foo = {
    bar: 1,
    baz: 2
};

var { bar, baz } = foo;

console.log(bar);

var tenses = ["me", "you", "he"];
var [ firstPerson, secondPerson ] = tenses;

console.log(firstPerson);

var foo2 = 2;

var obj = {
    bar: 1,
    foo2,
}
console.log(obj);

var obj2 = {
    ["name" + name]: "some value"
}

console.log(obj2);

// function calcBmi({ weight: w, height: h, max = 25, callback }) {
//     var bmi = w / Math.pow(h, 2);
//     if (bmi > max) {
//         console.log("you're overweight");
//     }
//     if(callback) {
//         callback(bmi);
//     }
// }
// calcBmi({ weight, height, max: 25 });
// calcBmi({ weight, height, callback: function() {} });

// Part2
//Block scoping

var a = 1;
//const for a variable not change
//let when change
if(true) {
    var b = 2; //let, const block
    const bar = { a: 1};
}
console.log(b);

//Class
//old way
// function Parent() {

// }

// Parent.prototype.foo = function() {}

//New

class Parent {
    age = 34;

    constructor() {

    }
    foo() {

    }
    bar() {

    }
}

var parent = new Parent();
//console.log(parent.age);

class Child extends Parent {
    constructor() {
        super()
    }
    baz() {

    }
}
var child = new Child();
child.foo();

//arrow functions

var foo = function(a, b) { // no arrow
    return a + b;
}

var foo = (a, b) => { // with arrow
    return a + b;
}

do.something(function(a,b) { //no arrow function
    return a + b;
});

do.something((a, b) => { return a + b; }); //with arrow function

do.something((a, b) => a + b) //also arrow

[0,1,2].map(val => val++) //Increment [1,2,3]

var module = { //bind old way
    age: 30,
    foo: function () {
        setTimeout(function() {
            console.log(this.age)
        }.bind(this), 100);
    }
};

module.foo();

var module = { //bind new way with bind
    age: 30,
    foo: function () {
        setTimeout(() => {
            console.log(this.age)
        }, 100);
    }
};

module.foo();

//es6 modules

var myModule = require("myModule");

module.exports.foo = function() { // in module file old way

};

export function foo() { // new way
     
}

export var foo = 3;

//in another file

import myModule from "myModule"; //top!! of new file { foo } { foo as foolish } console.log(foolish) instead of var myModule = require("myModule");

//Async function

async function() {
   var friend =  await $.get("http://somesite.com/friends"); //instead of yield
   //console.log(friends);
}