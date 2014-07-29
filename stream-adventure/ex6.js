var concatStream = require("concat-stream")
var through = require("through")


function reverse(s) {
	return s.split("").reverse().join("");
}

process.stdin.pipe(concatStream(function (body) {
	var data = reverse(body.toString())
	console.log(data)
}))

