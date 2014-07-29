var split = require("split")
var through = require("through")

var lineCount = 1
var tr = through(function (line) {
	if (lineCount % 2 === 0) 
		line = line.toString().toUpperCase()
	else 
		line = line.toString().toLowerCase()
	
	lineCount++
	this.queue(line+"\n")

})

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)
