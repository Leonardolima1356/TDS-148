const primeiro = 10
const segundo = 2
const terceiro = 5

function soma(){
    printText()
    // return segundo + terceiro
    return "resultado: " + (segundo + terceiro)
}

function printText(){
    console.log("está é uma função de soma")
}

console.log(soma())

// function somaComParametros(n1, n2, n3){
//     return n1 + n2 + n3
// }

const somaComParametros = (n1, n2, n3) => n1 + n2 + n3

console.log(somaComParametros(1, 2, 3))

const teste = () => "texto qualquer"

console.log(teste())

function func(){
    return "qualquer"
}

const func = () => "qualquer"