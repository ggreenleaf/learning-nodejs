var fs = require("fs")
var path = require("path")

module.exports = function (dir, ext, callback)	{
	ext = "." + ext
	fs.readdir(dir, function (err, list) {
		if (err)
			return callback(err)
		
		//data holds all files with matching ext
		//could use list.filter 
		data = []
		list.forEach( function (file) {
			if (path.extname(file) === ext)
				data.push(file)
		})

		callback(null,data)
	})
	}


/* Their solution to ex6

    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }

*/