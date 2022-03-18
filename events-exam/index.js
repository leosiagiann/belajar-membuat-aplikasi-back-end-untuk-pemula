const EventEmitter = require('events')

const brithdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

const myEmitter = new EventEmitter();

myEmitter.on('birthday', brithdayEventListener);

myEmitter.emit('birthday', 'Leonardo');