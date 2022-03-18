const { readFile, readFileSync } = require('fs')
const { resolve } = require('path')

const readFileStatus = (error, data) => {
    console.log("Async Method")
    console.log("================================================")
    if(error) {
        console.log("Gagal Membaca File")
    }
    console.log(data)
}

// Async Method
readFile(resolve(__dirname,'notes.txt'), 'UTF-8', readFileStatus);

// Sync
console.log("Sync Method")
console.log("================================================")
console.log(readFileSync(resolve(__dirname,'notes.txt'), 'UTF-8'))