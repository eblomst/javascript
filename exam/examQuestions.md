# Period-1 Vanilla JavaScript, es2015 ->, Node.js and Babel + Webpack

## Explain and Reflect:

- Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled 
language and JavaScript a scripted language, and general differences in language features.

Function are First-Class Members in JavaScript

Another major difference is how the language is presented to the end user (that's you when you're surfing). Java must be compiled into what is known as a "machine language" before it can be run on the Web.
Basically what happens is after the programmer writes the Java program and checks it for errors, he or she hands the text over to another computer 
program that changes the text code into a smaller language. That smaller language is formatted so that it is seen by the 
computer as a set program with definite beginning and ending points. Nothing can be added to it and nothing can be subtracted without destroying the program.
JavaScript is text-based. You write it to an HTML document and it is run through a browser. You can alter it after it runs and run it again and again. 
Once the Java is compiled, it is set. Sure, you can go back to the original text and alter it, but then you need to compile again.


Java is an OOP programming language while Java Script is an OOP scripting language.

Java creates applications that run in a virtual machine or browser while JavaScript code is run on a browser only.

Java code needs to be compiled while JavaScript code are all in text.

In Java we can have variables that points to an object
````
A myA = new A();
````

We can pass objects as parameters
````
someFunction(myA);
````

We can return objects from methods
````
A method(){
  return new A(); 
}
````

We can have nested classes
````
class A {
 class Inner { .. } 
}
````

In JavaScript we can have variables that points to a function
````
var f1 = function(){...}
````

We can pass functions as parameters
````
someFunction(f1)
````

We can return functions from functions
````
function someFunction(){
 return function() {...};
}
````

We can have nested functions
````
function someFunction(){
 function anotherFunction()  {...};
}
````

- Explain the two strategies for improving JavaScript: ES6 (es2005) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node, in (many different) Browsers

**es2015**

es2015 brings features like, arrow functions, Classes and Inheritance,
promises, Generators etc.

Can be used in pretty much all browsers using polyfil or a transpiler

Can be used with NodeJS almost out of the box with LTS v6.x or via a transpiler (Babel)

Avaible with newer vesions of ReactJS.

**TypeScript**

Free Open source language by Microsoft. Superset of JavaScript and adds optional static typing and
many features like es2015/es2016

Can be used in all browsers when complied into ES5

Can be used with NodeJS with a typescript compiler

Angular 2 is designed to written with TypeScript (Angular 2 can also be used with ES 5 and es2015)

- Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.

Node is a platform that is built on Chrome's JavaScript runtime for easily building fast and scalable network applications

Perfect for data-intensive real-time applications that run across distributed devices.


Based on Googles V8 Engine

Event Driven

Highly targetet against async programming

Non-Blocking I/O

Easily Scalable 


Node is another kind of Java, it runs on a Vitural Machine that is Googles V8 Engine

It can also run on multiple platforms (Windows, MacOS etc.)

You have to include packages before you can use them 

> Java - import.util.List

> Node - require('net')

You have to obtain packages, like we did we Maven last semester. In Node we can use npm (Node package manager).

**Node is suited for these types of applications:**

Applications involving a lot of IO

Real Time chat Server

Web servers

REST servers

Streaming servers

Games

Because of it's non blocking API (think CA-1)

Builds high-performance servers

Node, combined with a browser, a document DB (ex. MongoDB) and JSON offers a Unified JavaScript Development Stack

JavaScript on the Client

JavaScript on the Server

JavaScript on the DataBase

Perfect for Single Page Apps
 
- Explain about the Event Loop in Node.js

In our previous project we had problems with a blocking API.

When you read from a file, the calling thread blocks

When you read from a network stream, the calling thread blocks

Basically, when you do any IO, the calling thread block until the IO operation is done

Threads were necessary to solve these blocking problems, with all the problems that comes with threads

Node is a single threaded application. 

Node Js is non-blocking

Blocking code:

````
var contens = fs.readFileSync('etc/hosts');

console.log(contens);
console.log('Doing something else');
````

Non-blocking code:
````
fs.readFile('etc/hosts', function(err, contents) {
   console.log(contents);
});

console.log('Do something');
````

The eventloop keeps checking if their are any events to come in and when there's an event that comes in
it will trigger the event and then run the callback.

When we run a node application it registers events and they can trigger more events. When our applications goes into 
the event loop, the event loop can trigger and admitting events to the event queue. These events are going to processed 
one of the time by our event loop.

  
- Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

Webpack is a module bundler. It means that webpack takes modules and dependencies and generates static assets representing those modules.

Webpack out of the box only knows how to read and understand .js files.

We use babel to convert our code to old JavaScript syntax because the support of browsers are still low. 

In the webpackEx we have used modules babel-loader, css-loader, file-loader. Look at webpack.config.js


- Explain the purpose of “use strict” and also Linters, exemplified with ESLint 

It defines that JavaScript should execute the code in strict mode. In strict mode you can't use undeclared variables. 

**Why use it**

Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, 
this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.


