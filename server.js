import http from 'http'

const PORT = process.env.PORT

const server = http.createServer((req, res) => {
	// res.setHeader('Content-Type', 'text/html') // text/plain, text/html, application/json
  // res.statusCode = 404
  // Shorthand for what's above:
	res.writeHead(200, { 'Content-Type': 'text/html' })

	res.end('<blockquote>Hello&nbsp;World</blockquote>')
})

server.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
