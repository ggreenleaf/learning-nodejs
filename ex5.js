var fs = require("fs")
var path = require("path")

file = process.argv[2]
ext = process.argv[3]
ext = "." + ext
fs.readdir(file, function (err, list){
	for (var i = 0; i < list.length; i++) {
		 if (path.extname(list[i]) == ext) {
		 	console.log(list[i]);
		 }
	};

});

/* Their solution

    var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

*/