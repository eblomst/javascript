let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function myFilter(arr, callback) {
    let arrayToReturn = [];
    arr.forEach(function(name) {
        let shouldInclude = callback(name);
        if(shouldInclude) {
            arrayToReturn.push(name);
        }
    })
    return arrayToReturn;
};

let names2 = myFilter(names,function(name) {
    return name.length >= 3;
});


console.log(names2);
//console.log(names2);

function myMap(arr, callback) {
    let arrayToReturn = [];
    arr.forEach(function(name) {
        
            arrayToReturn.push(callback(name));
        
    });
    return arrayToReturn;
};

let names3 = myMap(names, function(name) {
    return name.toUpperCase();
});

console.log(names3);