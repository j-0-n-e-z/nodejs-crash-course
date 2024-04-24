import http from 'http'

const PORT = 5000

const server = http.createServer((req, res) => {
	// res.setHeader('Content-Type', 'text/html') // text/plain, text/html, application/json
  // res.statusCode = 404
  // Shorthand for what's above:
	res.writeHead(500, { 'Content-Type': 'application/json' })

	res.end(JSON.stringify({ message: 'Server Error' }))
})

server.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
