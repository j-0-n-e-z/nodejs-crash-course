import crypto from 'crypto'

// createHash
// const hash = crypto.createHash('sha256')
// hash.update('some_really_strong_password_1337')
// console.log(hash.digest('hex')) // d43ddb65d04d10c5e055df5180caf9bf9651ccb0be26ac090a008231e965577a

// randomBytes - async callback
// crypto.randomBytes(16, (err, buf) => {
// 	if (err) throw err
// 	console.log(buf.toString('hex')) // 515831a172db4208d75b9a2fc31cd836
// })

// createCipheriv & createDecipheriv
const algorithm = 'aes-256-ctr'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('some_really_strong_password_1337', 'utf8', 'hex')
encrypted += cipher.final('hex')
console.log(encrypted) // 8e3e3e7a6e3c5e3d2d1d8c8e8e1e7b6e

const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf8')
decrypted += decipher.final('utf8')
console.log(decrypted) // some_really_strong_password_1337