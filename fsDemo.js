// import fs from 'fs'

/// readFile() - callback
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//   try {
//     if (err) throw err
//     console.log(data)
//   } catch (err) {
//     console.table(err)
//   }
// })

/// readFileSync() - synchronous version
// try {
//   const data = fs.readFileSync('./test.txt', 'utf-8')
//   console.log(data);
// } catch (err) {
//   console.table(err);
// }

import fs from 'fs/promises'

// readFile - Promise version
// fs.readFile('./test.txt', 'utf-8').then(
// 	data => console.log(data),
// 	err => console.table(err)
// )

// readFile - async/await
const readFile = async () => {
	try {
		const data = await fs.readFile('./test.txt', 'utf-8')
		console.log(data)
	} catch (err) {
		console.table(err)
	}
}

// writeFile
const writeFile = async () => {
	try {
		await fs.writeFile('./test.txt', "Hello, I'm writing to this file")
	} catch (err) {
		console.table(err)
	}
}

// appendFile
const appendFile = async () => {
	try {
		await fs.appendFile('./test.txt', "\nHello, I'm appending to this file")
	} catch (err) {
		console.table(err)
	}
}

writeFile().then(readFile).then(appendFile).then(readFile)
