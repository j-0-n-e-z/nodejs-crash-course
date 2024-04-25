import os from 'os'

// userInfo
const { username, homedir } = os.userInfo()
console.log(username, homedir) // [User] C:\Users\[User]

// totalmem
console.log(os.totalmem()) // 17026232320

// freemem
console.log(os.freemem()) // 8989728768

console.table(os.type()) // Windows_NT
console.table(os.platform()) // win32
console.table(os.arch()) // x64
console.table(os.release()) // 10.0.22000
console.table(os.cpus()) //  Intel(R) Core(TM) i3-10100F CPU @ 3.60GHz
