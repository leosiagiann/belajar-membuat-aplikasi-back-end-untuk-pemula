const { createWriteStream, createReadStream } = require('fs')
const { resolve } = require('path')

const readInput = createReadStream(resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
})

const writeOutput = createWriteStream(resolve(__dirname, 'output.txt'))

readInput.on('readable', () => {
    try{
        writeOutput.write(`${readInput.read()}\n`)
    }catch(error){
        console.log(error.message)
    }
})

readInput.on('end', () => {
    writeOutput.end();
    console.log('Read & Write file done')
})

