// argv
console.log(process.argv.slice(2)) // for command "node .\processDemo.js import -s" -> [ 'import', '-s' ]

// env
console.log(process.env.COMPUTERNAME) // RUSTAM

// pid
console.log(process.pid) // 18900

// cwd - current working directory
console.log(process.cwd()) // C:\Users\Rustamka\Desktop\projects\nodejs-crash-course

// update
console.log(process.uptime()) // 0.0570846

// exit
process.on('exit', code => {
	console.log(`About to exit with exit code ${code}`)
})

process.exit(0)

console.log("Message after exit won't be printed")
