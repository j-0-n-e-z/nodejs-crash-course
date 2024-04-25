import { createServer } from 'http'

const PORT = process.env.PORT

const users = [
	{ id: 1, name: 'John Doe' },
	{ id: 2, name: 'Jane Doe' },
	{ id: 3, name: 'Jim Doe' }
]

// Logger middleware
const logger = (req, res, next) => {
	console.log(`${req.method} ${req.url}`)
	next()
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
	res.setHeader('Content-Type', 'application/json')
	next()
}

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
	res.end(JSON.stringify(users))
}

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
	const id = req.url.split('/')[3]
	const user = users.find(user => user.id == id)
	if (user) {
		res.end(JSON.stringify(user))
	} else {
		res.statusCode = 404
		res.end(JSON.stringify({ message: 'User not found' }))
	}
}

// Not found handler
const notFoundHandler = (req, res) => {
	res.statusCode = 404
	res.end(JSON.stringify({ message: 'Route not found' }))
}

//  Route handler for POST /api/users
const createUserHandler = (req, res) => {
	let body = ''
	req.on('data', chunk => {
		body += chunk + ''
	})
	req.on('end', () => {
		const newUser = JSON.parse(body)
		users.push(newUser)
		res.statusCode = 201
		res.end(JSON.stringify(newUser))
	})
}

const server = createServer((req, res) => {
	logger(req, res, () => {
		jsonMiddleware(req, res, () => {
			if (req.method === 'GET') {
				if (req.url === '/api/users') {
					getUsersHandler(req, res)
				} else if (req.url.match(/\/api\/users\/\d+/)) {
					getUserByIdHandler(req, res)
				} else {
					notFoundHandler(req, res)
				}
			} else if (req.method === 'POST') {
				if (req.url === '/api/users') {
					createUserHandler(req, res)
				}
			}
		})
	})
})

server.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
