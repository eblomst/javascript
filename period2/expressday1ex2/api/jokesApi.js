var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');



router.get('/joke/random', function(req, res, next) {
    let json = {"joke": jokes.getRandomJoke()};
    res.end(JSON.stringify(json));
});

router.get('/jokes', function(req, res, next) {
    res.end(JSON.stringify(jokes));
});

router.post('/joke', function(req, res, next) {
    jokes.addJoke(req.body.joke);
    res.end(JSON.stringify(jokes));
});

module.exports = router;