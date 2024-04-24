import fs from 'fs/promises'
import http from 'http'
import path from 'path'
import url from 'url'

const PORT = process.env.PORT

const __filename = url.fileURLToPath(import.meta.url) // path to server.js
const __dirname = path.dirname(__filename) // path to folder with server.js inside

const server = http.createServer(async (req, res) => {
	try {
		if (req.method === 'GET') {
			let filePath

			if (req.url === '/') {
				filePath = path.join(__dirname, 'public', 'index.html')
			} else if (req.url === '/about') {
				filePath = path.join(__dirname, 'public', 'about.html')
			} else {
				filePath = path.join(__dirname, 'public', '404.html')
			}

			const data = await fs.readFile(filePath)
			res.writeHead(200, 'Content-Type', 'text/html')
			res.end(data)
		} else {
			throw new Error('Method not allowed')
		}
	} catch (error) {
		res.writeHead(500, { 'Content-Type': 'text/plain' })
		res.end(error.message)
	}
})

server.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
