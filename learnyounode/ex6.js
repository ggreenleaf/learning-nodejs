var mymodule = require("./mymodule.js")

argv = process.argv
list = mymodule(argv[2],argv[3], function (err,data) {
	if (err)
		console.log("error: " + err)
	else
		data.forEach(function (file) {
			console.log(file)
		})
})

/*
	var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)
    
      list.forEach(function (file) {
        console.log(file)
      })
    })
	

*/

