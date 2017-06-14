var fs = require('fs');
var path = require('path');

module.exports = function (dirName, extName, callback) {
   
    fs.readdir(dirName, function(err, list) {
     if(err) {
        return callback(err);
    } else {
    
    list = list.filter(function(file) {
         if(path.extname(file) == '.' + extName) {
            return true;
        }
       
    })
     return callback(null, list);
    }
 });
};