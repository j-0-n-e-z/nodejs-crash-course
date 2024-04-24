import getPosts, { getPostsLength } from './postController.js'

getPosts().forEach(post => console.log(post))
// getPosts().forEach(console.log) // works different way than in browser
// Browser: getPosts().forEach(console.log) => getPosts().forEach(post => console.log(post))
// Node.js: getPosts().forEach(console.log) => getPosts().forEach((post, idx, posts) => console.log(post, idx, posts))
console.log(`Posts length: ${getPostsLength()}`)
