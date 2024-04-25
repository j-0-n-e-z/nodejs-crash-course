import url from 'url'

const urlString = 'https://www.google.com/search?q=hello+world'

// URL Object
const urlObject = new URL(urlString)
console.log(urlObject)
console.log(urlObject.searchParams) // URLSearchParams { 'q' => 'hello world' }

// format
console.log(url.format(urlObject)) // https://www.google.com/search?q=hello+world

// import.meta.url - file URL
console.log(import.meta.url) // file:///C:/Users/[User]/Desktop/[Folder]/nodejs-crash-course/urlDemo.js
console.log(url.fileURLToPath(import.meta.url))

const params = new URLSearchParams(urlObject.search)
console.log(params) // URLSearchParams { 'q' => 'hello world' }
console.log(params.get('q')) // hello world
params.append('limit', 5)
params.delete('q')
console.log(params) // URLSearchParams { 'limit' => '5' }
