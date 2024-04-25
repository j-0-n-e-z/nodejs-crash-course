import path from 'path'
import url from 'url'

const filePath = './dir1/dir2/test.txt'

// basename
console.log(path.basename(filePath)) // test.txt

// dirname
console.log(path.dirname(filePath)) // ./dir1/dir2

// extname
console.log(path.extname(filePath)) // .txt

// parse
console.log(path.parse(filePath))
/*
{
  root: '',
  dir: './dir1/dir2',
  base: 'test.txt',
  ext: '.txt',
  name: 'test'
}
 */

// in CommonJS __dirname and __filename are available, in ES Modules you have to create ones yourself
const __filename = url.fileURLToPath(import.meta.url) // C:\Users\[User]\[Folder]\nodejs-crash-course\pathDemo.js
console.log(__filename)
const __dirname = path.dirname(__filename) // C:\Users\[User]\[Folder]\nodejs-crash-course
console.log(__dirname)

// join (puts correct delimeters because they are different in different OS)
const filePath2 = path.join('dir1', 'dir2', 'test.txt') // dir1\dir2\test.txt
console.log(filePath2)

// resolve (same as join but always an absolute path)
const filePath3 = path.resolve('dir1', 'dir2', 'test.txt') // C:\Users\[User]\[Folder]\nodejs-crash-course\dir1\dir2\test.txt
console.log(filePath3)