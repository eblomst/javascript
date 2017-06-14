//Hello world ex1 console.log("HELLO WORLD");

//Baby steps ex2
//console.log(process.argv);

var sum = 0;
for(var i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}

console.log(sum);