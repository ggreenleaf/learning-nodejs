var http = require("http")
var url = require("url")
var querystring =require("querystring")

function unixtime (time) {
	return { "unixtime" : time.getTime() }
}

function parsetime (time) {
	return {
			"hour" : time.getHours(),
			"minute" : time.getMinutes(),
			"second" : time.getSeconds()
		   }
	}


var server = http.createServer(function (req, res) {
	parsed_url = url.parse(req.url, true)
	if (req.method == "GET") {
		isoDate = parsed_url.query["iso"]
		dateTime = new Date(isoDate)
		
		res.writeHead(200, { "Content-Type" : "application/json" })

		if (parsed_url.pathname == "/api/unixtime") {
			res.write( JSON.stringify(unixtime(dateTime) ))

		}
		else if (parsed_url.pathname == "/api/parsetime") {
			res.write( JSON.stringify(parsetime(dateTime) ))
		
		}
		res.end()
		
	
	}


})

server.listen(Number(process.argv[2]))




    // var http = require('http')
    // var url = require('url')
    
    // function parsetime (time) {
    //   return {
    //     hour: time.getHours(),
    //     minute: time.getMinutes(),
    //     second: time.getSeconds()
    //   }
    // }
    
    // function unixtime (time) {
    //   return { unixtime : time.getTime() }
    // }
    
    // var server = http.createServer(function (req, res) {
    //   var parsedUrl = url.parse(req.url, true)
    //   var time = new Date(parsedUrl.query.iso)
    //   var result
    
    //   if (/^\/api\/parsetime/.test(req.url))
    //     result = parsetime(time)
    //   else if (/^\/api\/unixtime/.test(req.url))
    //     result = unixtime(time)
    
    //   if (result) {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(result))
    //   } else {
    //     res.writeHead(404)
    //     res.end()
    //   }
    // })
    // server.listen(Number(process.argv[2]))