import { EventEmitter } from 'events'

const emitter = new EventEmitter()

function greetHandler(name) {
  console.log(`Hello world, ${name}`);
}

function goodbyeHandler(name) {
  console.log(`Goodbye world, ${name}`)
}

// Register event listeners
emitter.on('greet', greetHandler)
emitter.on('goodbye', goodbyeHandler)

// Emit events
emitter.emit('greet', 'John')
emitter.emit('goodbye', 'John')

// Error handling
emitter.on('error', (err) => console.log(err))

// Simulate error
emitter.emit('error', new Error('Something went wrong'))