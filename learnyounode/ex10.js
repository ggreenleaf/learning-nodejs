var net = require("net")
var util = require("util")

function zeroFill(i) {
	return (i < 10 ? "0" : "") + i
}

var server = net.createServer(function (socket) {
	var date = new Date()

	datetime = util.format("%s-%s-%s %s:%s\n", zeroFill(date.getFullYear()),
		zeroFill(date.getMonth()+1),
		zeroFill(date.getDate()),
		zeroFill(date.getHours()),
		zeroFill(date.getMinutes()))

	
	socket.end(datetime)
	//same as socket.write(datetime)
	//socket.end()
	
})
server.listen(process.argv[2])
// Their Solution
	   //  var net = require('net')
    
    // function zeroFill(i) {
    //   return (i < 10 ? '0' : '') + i
    // }
    
    // function now () {
    //   var d = new Date()
    //   return d.getFullYear() + '-'
    //     + zeroFill(d.getMonth() + 1) + '-'
    //     + zeroFill(d.getDate()) + ' '
    //     + zeroFill(d.getHours()) + ':'
    //     + zeroFill(d.getMinutes())
    // }
    
    // var server = net.createServer(function (socket) {
    //   socket.end(now() + '\n')
    // })
    
    // server.listen(Number(process.argv[2]))