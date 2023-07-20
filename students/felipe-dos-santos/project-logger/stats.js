const os = require('os')
const log = require('./logger')

setInterval(() => {

    const { freemem, totalmem } = os// desestruturando os metodos de os 

    // console.log(`Memoria livre: ${parseInt(freemem() / 1024/1024)} MB
    // Total de memoria: ${parseInt(totalmem() / 1024 / 1024)} MB`)

    const total = parseInt(totalmem() / 1024 / 1024)
    const freeMem = parseInt(freemem() / 1024 / 1024)
    const usage = parseInt(100 - ((freeMem / total) * 100))
    // console.log('Memoria usada: ' + parseInt(usage) + ' %')

    const stats = {
        total: `${total} MB`,
        freeMem: `${freeMem} MB`,
        usage: `${usage} %`
    }
    console.clear()//
    console.log('++++ MEMORY STATS ++++')
    console.table(stats)

    log(`${JSON.stringify(stats)} \n`)

}, 1000)

