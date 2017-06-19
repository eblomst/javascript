var express = require("express")
var app = express()
var port = 7777
var facade = require("./db")
var bodyParser = require('body-parser');
var userFacade = require('./userFacade')
var helmet = require('helmet')

var passport = require("passport")
var JWT = require('jsonwebtoken')
var Secret = require('./serverSecret').secret

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = Secret

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next){
    try {

        console.log('payload received', jwt_payload);
        userFacade.findByUserName(jwt_payload.userName, function(user){
            if (user){
                next(null, user);
            } else {
                next(null, false);
            }
        })
    }
    catch (exception){
        next(null, false)
    }
});
app.use(helmet())

passport.use(strategy)

app.use(passport.initialize());
app.listen(port, function(){
    console.log("Server started at port: " + port)
})

app.listen(port, function(){
    console.log("Server Started at Port " + port)
})

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/api/books", function(req, res){
    facade.getBooks(function(books){
        res.send( JSON.stringify(books))
        console.log("Get booooks from index.js"); 
    })},

app.get("", function(req,res){
    facade
}),

app.use("/api/login", function(req, res){
        if(req.body.userName && req.body.password){
            var userName = req.body.username;
            var password = req.body.password;
        }
        else {
            res.json({message:"Please provide body with userName and password"})
            return
        }

        userFacade.login(userName, password, function(data){
            if(data.success === false) res.status(401).json({message: "No authentication"})
            else {
                var payload = {userName: data.user.username}
                var token = JWT.sign(payload, jwtOptions.secretOrKey);
                res.json({message})
            }
        })
    }),

    app.get("/secret", passport.authenticate('jwt', { session: false}), function(req, res){
        res.json("Succesfully gained secret.");
    }),

    app.post("/api/books", passport.authenticate('jwt', {session: false}), function(req, res){
        var book = req.body.book
        facade.addBook(book, function(updatedBook){
            console.log(updatedBook)
            res.send(JSON.stringify(updatedBook))
        })
}),

app.post("/api/books", function(req,res){
    var book = req.body;
    
     facade.addBook(book, function(book){
         res.send(JSON.stringify(book))
     })
     console.log("Post booooks");
    }),

app.put("/api/books", function(req,res){
        var book = req.body.book
        facade.updateBook(book, function(updatedBook){
            console.log(updatedBook)
            res.send(JSON.stringify(updatedBook))
               
        }) 
    }),

app.delete("/api/books/:id", function(req,res){
        var bookid = parseInt( req.params.id)
        facade.deleteBook(bookid, function(response){
            res.send(JSON.stringify(response))
        })
    })
);