const { createReadStream } = require('fs');
const { resolve } = require('path')

const readableStream = createReadStream(resolve(__dirname, 'notes.txt'), {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`)
    }catch (error) {
        console.error(error.message)
    }
})

readableStream.on('end', () => {
    console.log("Read File Done");
})