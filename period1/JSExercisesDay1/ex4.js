
let namesa = ["Lars", "Peter", "Jan", "Bo"];

let rows = namesa.map(function(name) {
    return "<li>"+name+"</li>"
});

let rowsStr = rows.join(" ");

//console.log(rowsStr);

let list = `<ul> ${rowsStr} </ul>`

console.log(list);

var namesb = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];


let rowsb = namesb.map(function(json) {
    return "<tr><td>"+json.name+"</td>"+"<td>"+json.phone+"</td></tr>"
});

let rowStrb = rowsb.join(" ");

let table = `<table> <tr><thead><th>Name</th> <th>Phone</th></thead> ${rowStrb} <tbody></tbody></tr>`

console.log(table);

document.getElementById("names").innerHTML = list;

document.getElementById("filt").addEventListener("click", function () {
    let namesFilter = namesb.filter(function(json){
        let name = json.name >3;
        console.log("name " + name);
        return "<li>"+name+"</li>";
    });

    let rowsStrFilter = namesFilter.join(" ");
    console.log("after " + rowsStrFilter.name);

    rowsStr = rowsStrFilter;

    console.log(list);
});



    
