const express = require('express');

const app = express();

// app.get("/", function(req, res) {

// });

app.get("/", (req, res)=> {
    res.send("Hello");
});

app.get("/world", (req, res)=> {
    res.send("Hello World");
});


app.listen(3333, function() { //()=>console.log("Server started");
    console.log("Server started");
});