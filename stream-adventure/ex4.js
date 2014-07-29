var through = require("through")

var tr = through(function write(buf) {
		buf = buf.toString().toUpperCase()
		this.queue(buf)
	},
	function end() {
		this.queue(null)
	})

process.stdin.pipe(tr).pipe(process.stdout)