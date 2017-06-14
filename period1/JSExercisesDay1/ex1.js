//1
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

let namesFilter = names.filter(function(name) {
    return name.length >=3;
});

console.log(namesFilter);

//2


let namesMap = names.map(function(name) {
    return name.toUpperCase();
});

console.log(namesMap);

