// setTimeout( function () {
//     console.log('==========APARECEU===========')
//   }, 5000 )// espera para executar 

// setInterval( () => console.log('==========APARECEU==========='), 5000 )// espera para executar 

// function myFunction(){
//     console.log('==========APARECEU===========')
// }

// setInterval( myFunction, 2000 )
// function myFunction () {
//     const data = new Date();

//     const horas= data.getHours();
//     const minutos= data.getMinutes();
//     const segundos= data.getSeconds();

//     console.log(horas + ':' + minutos + ':' + segundos)

// }
// 

// setInterval( myFunction, 2000 )
// setInterval( myFunction, 2000 )
/*
const fs = require('fs')
console.log('primeira saída.')
fs.readFile('./doc.txt', callback)// busca conteudos em documentos
function callback( err , conteudo){
    if  ( err )  return console.error(err)
    console.log(String(conteudo))
}
// console.log( dados ) ;
console.log('segunda saída.')
console.log('terceira saída.')
//callback é uma função sendo passada/chamada dentro de uma lista de argumentos
*/

function soma(callback, callbackErro){
    const resultado = 1 + 2
    if (resultado === 2) callback()
    else callbackErro()
}

// function sucesso(){
//     console.log('Sucesso! A soma está correta.')
// }

// function erro(){
//     console.log('Erro!, a soma não deu certo.')
// }

soma(
    () => console.log('Sucesso! A soma está correta.'),
    () => console.log('Erro!, a soma não deu certo.')
    )

//PROMISES
//São Classes que possuem métodos especificos para quando o resultado de uma execução for conclida com sucesso ou quando fugir do esperado

const p = new Promise((resolve, reject) => {
    const resultado = 1 + 1
    if(resultado === 2) resolve('Sucesso! A soma está correta.')
    else reject ('Erro!, a soma não deu certo. ')
})

p.then((mensagem) => {// then é relacionado ao resolve
    console.log(mensagem)
}).catch((mensagem) =>{//catch é relacionado ao reject
    console.log(mensagem)
})

//voltando para callback

// const melhorProgramdor = 'Paulo Sampaio'
// const melhorProgramdor = 'Gabriel Martins'

// function oMelhor(callback, callbackErro){
//     if(melhorProgramdor == 'Gabriel Martins'){
//         callback({
//             nome: melhorProgramdor,
//             mensagem: ' humildemente o melhor!'
//         })
//     }else{
//         callbackErro({
//             mensagem01: ' Tá errado',
//             mensagem02: melhorProgramdor + ',sério?'
//         })
//     }
// }

// oMelhor((objeto)=> {
//     console.log(objeto.nome + ' é' + objeto.mensagem)

// }, (objeto)=> {
//     console.log(objeto.mensagem02 +objeto.mensagem01)
// })

// const p = new Promise((resolve, reject) => {
//     const resultado = 1 + 1
//     if(resultado === 2) resolve('Sucesso! A soma está correta.')
//     else reject ('Erro!, a soma não deu certo. ')
// })

// p.then((mensagem) => {// then é relacionado ao resolve
//     console.log(mensagem)
// }).catch((mensagem) =>{//catch é relacionado ao reject
//     console.log(mensagem)
// })
const pro = new Promise((resolve, reject) =>{
    const melhorProgramdor = 'Felipe dos Santos'
    if((melhorProgramdor == 'Felipe dos Santos')){ resolve({
        nome: melhorProgramdor,
        mensagem: ' humildemente o melhor!'
    })}else {
        reject({
            mensagem01: ' Tá errado',
            mensagem02: melhorProgramdor + ',sério?'
        })
    }
})
pro.then((objetoo)=> {
    console.log(objetoo.nome + ' é' + objetoo.mensagem)
}).catch((objetoo)=> {
    console.log(objetoo.mensagem01 + objetoo.mensagem02)
}) 

