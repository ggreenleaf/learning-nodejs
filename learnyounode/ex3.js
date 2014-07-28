var fs = require("fs")

file = fs.readFileSync(process.argv[2])
data = file.toString()
data = data.split("\n")
console.log(data.length - 1)

