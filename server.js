import fs from 'fs/promises'
import http from 'http'
import path from 'path'
import url from 'url'

const PORT = process.env.PORT

// path to server.js
const __filename = url.fileURLToPath(import.meta.url)
// path to folder with server.js inside
const __dirname = path.dirname(__filename)

const server = http.createServer(async (req, res) => {
	try {
		if (req.method === 'GET') {
			let filePath
			res.setHeader('Content-Type', 'text/html')

			if (req.url === '/styles.css') {
				filePath = path.join(__dirname, 'public', 'styles.css')
				res.setHeader('Content-Type', 'text/css')
			} else if (req.url === '/') {
				filePath = path.join(__dirname, 'public', 'index.html')
			} else if (req.url === '/about') {
				filePath = path.join(__dirname, 'public', 'about.html')
			} else {
				filePath = path.join(__dirname, 'public', '404.html')
				res.statusCode = 404
			}

			const data = await fs.readFile(filePath)
			res.end(data)
		} else {
			throw new Error('Method not allowed')
		}
	} catch (error) {
		res.writeHead(500, 'Content-Type', 'text/plain')
		res.end(error.message)
	}
})

server.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
