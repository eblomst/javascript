var counter = require("./app.js");


var counter1 = counter();
var counter2 = counter();
counter1.increment();
counter1.increment();
counter2.increment();
console.log(counter1.value())// =2
console.log(counter2.value())// =1