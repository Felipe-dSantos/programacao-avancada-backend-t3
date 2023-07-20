const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')



const emitter = new EventEmitter()

//espera o evento emitido pelo metodo emit e executa
emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
        if(err) throw err
    })
    console.log(message)
})

function log (mensage){
    emitter.emit('log', mensage)// emite um evento
}

// log('um log qualquer...')

// log('outro log qualquer...')


module.exports = log