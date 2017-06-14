//Hello World

//console.log("HELLO WORLD");

//Baby Steps
/*
let sum = 0;
for(var i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
} 

console.log(sum);
*/

// My First I/O
/*
var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var arr = str.split('\n');

console.log(arr.length-1);
*/

// My First Async I/O
/*
var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
    if(err) {
        return console.log(err);
    }
    var result = data.toString().split('\n').length-1;
    console.log(result);
});
*/

// Filtered LS
/*
var fs = require('fs');
var path = require('path');

var ext = "." + process.argv[3];
fs.readdir(process.argv[2], function(err, list) {
    
    list.forEach(function(file) {
        if(path.extname(file) == ext) {
            console.log(file);
        }
    });
    
});*/

// Make it modular
/*
mymodule = require('./moduleEx');

mymodule (process.argv[2], process.argv[3], function(err, list) {
    if(err) {
        return console.log(err);
    } else {
        list.forEach(function(file) {
            console.log(file);
        });
    }
});*/

// HTTP Client
/*
var http = require('http');

http.get(process.argv[2], function(response) {
    response.on("data", function(data) {
        console.log(data.toString());
    });
    response.on("error", function(error) {
        console.log(error);
    })
});
*/

//HTTP Collect
/*
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {
    response.pipe(bl(function(err, data) {
        if(err) {
            console.log(err);
        } else {
            data = data.toString();
            console.log(data.length);
            console.log(data);
        }
    }));
});
*/

// Juggling Async
/*
var http = require('http');
var bl = require('bl');
var count = 0;
var results = [];

function print() {
    for(var i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}
function httpGet(index) {
http.get(process.argv[2 + index], function(response) {
    
    response.pipe(bl(function(err,data) {
        if(err) {
            return err;
        } else {
            results[index] = data.toString();
            count++
            if(count == 3) {
                print();
            }
        }
    }));
})
}

for(var i = 0; i < 3; i++) {
    httpGet(i);
}
*/

//Time Server
/*
var net = require('net');
var date = new Date();

function putInZero(numb) {
    if(numb < 10) {
        return '0' + numb;
    } else {
        return numb;
    }
}
var server = net.createServer(function (socket) {
    var data = date.getFullYear() + "-" + putInZero(date.getUTCMonth()+1) + "-" + putInZero(date.getDate()) + " " + putInZero(date.getHours()) + ":" + putInZero(date.getMinutes())
   // socket.write();
    socket.end(data + '\n');
})
server.listen(process.argv[2]);
*/
// HTTP File Server
/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var file = fs.createReadStream(process.argv[3]);
    file.pipe(response);
})

server.listen(process.argv[2]);
*/

// HTTP Uppercaserer
/*
var map = require('through2-map');
var http = require('http');

var server = http.createServer(function(req,res) {
    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
    }

    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(process.argv[2]);
*/

//HTTP JSON API Server

var http = require('http');
var url = require('url');

var parseTime = function (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}
 
function unixTime (time) {
  return {unixtime: time.getTime()}
}
 
var parseQuery = function (url) {
    if(url.pathname == '/api/parsetime') {
        return parseTime(new Date(url.query.iso))
    }
    if(url.pathname == '/api/unixtime') {
        return unixTime(new Date(url.query.iso))
    }
}
 
http.createServer(function (req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    url = url.parse(req.url, true)
    res.end(JSON.stringify(parseQuery(url)))
  }
}).listen(process.argv[2]);
