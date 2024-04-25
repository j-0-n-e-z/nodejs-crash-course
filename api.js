import { createServer } from 'http'

const PORT = process.env.PORT

const users = [
	{ id: 1, name: 'John Doe' },
	{ id: 2, name: 'Jane Doe' },
	{ id: 3, name: 'Jim Doe' }
]

const server = createServer((req, res) => {
	res.setHeader('Content-Type', 'application/json')
	if (req.url === '/api/users' && req.method === 'GET') {
		res.end(JSON.stringify(users))
	} else if (req.url.match(/\/api\/users\/\d+/) && req.method === 'GET') {
		const id = req.url.split('/')[3]
		const user = users.find(user => user.id == id)
		if (user) {
			res.end(JSON.stringify(user))
		} else {
			res.statusCode = 404
			res.end(JSON.stringify({ message: 'User not found' }))
		}
	} else {
		res.statusCode = 404
		res.end(JSON.stringify({ message: 'Route not found' }))
	}
})

server.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
