
Array.prototype.myFilter = function(callback)  {
         let arrayToReturn = [];
    for(let i = 0; i < this.length; i++) {
        let shouldInclude = callback(this[i]);
        if(shouldInclude) {
            arrayToReturn.push(this[i]);
        }
    }
    return arrayToReturn;
};

Array.prototype.myMap = function(callback)  {
         let arrayToReturn = [];
    for(let i = 0; i < this.length; i++) {
        
          arrayToReturn.push(callback(this[i])); 
    }
    return arrayToReturn;
};


let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

let namesMyFilter = names.myFilter(function(name) {
    return name.length >= 3;
});

console.log(namesMyFilter);

let namesMyMap = names.myMap(function(name) {
    return name.toUpperCase();
});

console.log(namesMyMap);