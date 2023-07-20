// console.log("CALCULAr")
// function calcular() {
//     const formData = new FormData(document.querySelector('form'))
//     let n1 = parseInt(formData.get('n1'))
//     let n2 = parseInt(formData.get('n2'))
//     console.log(n1+n2)
// }

// Desafio 1: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

const numeros = [3,7,2,45,99]

const objetonum = {
    n1 : numeros [0],
    n2 : numeros [1],
    n3 : numeros [2],
    n4 : numeros [3],
    n5: numeros [4],

}

const { v1, v2, v3, v4, v5} = objetonum
// transformando o objeto em JSON
const objetonumJson = JSON.stringify(objetonum)
// transoformando o JSON em objeto literal
const numobjeto = JSON.parse(objetonumJson)

console.log(objetonumJson)
console.log(numobjeto)

// Desafio 2: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão propriedades do objeto) com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.
function calcular () {
    const formData = new FormData(document.querySelector('form'))
    let n1 = parseInt(formData.get('n1'))
    let n2 = parseInt(formData.get('n2'))
    const calculadora = {
    soma : n1 + n2,
    subtracao : n1 - n2,
    divisao : n1 / n2,
    multiplicacao : n1 * n2
}
const { soma, ...otherOperations} = calculadora
// const resultados = JSON.stringify(calculadora)
const resultados = JSON.stringify(calculadora)
//document.getElementById('resultados').textContent = resultados;
console.log(resultados)
}  


// Desafio relâmpago: escreva o que aparece no log abaixo como template literals.
const var1 = 5
const var2 = 10
const sumLiteral = 'Quinze é ${(var1+var2)},\n e não ${(2*var1+var2)}.'
const Literal = `Quinze é ${(var1+var2)},\n e não ${(2*var1+var2)}.`
console.log(sumLiteral)
console.log(Literal)

//Desafio: Transforme a função a seguir em uma arrow function.

/*
function out(){
    let x = 7
    function sumXand5(){
        return x+5
    }
    return sumXand5()
}
*/
function myFunction () {
    const data = new Date();
    const horas= data.getHours();
    const minutos= data.getMinutes();
    const segundos= data.getSeconds();
    console.log(horas + ':' + minutos + ':' + segundos)

}
