var concatStream = require("concat-stream")
var http = require("http")

http.get(process.argv[2], function (response) {
	response.setEncoding("utf8")
	response.pipe(concatStream(function (data) {
		console.log(data.length)
		console.log(data)
	}))
})

/* Their solution using bl
────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })

────────────────────────────────────────────────────────────────────────────────
*/