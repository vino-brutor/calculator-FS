const fs = require("fs")

const number1 = 5
const number2 = 10

function sum(number1, number2){
    return number2+ number1
}
function sub(number1, number2){
    return number2 - number1
}
function mult(number1, number2){
    return number2 * number1
}
function div(number1, number2){
    return number2 / number1
}

fs.writeFile("Calculadora.txt", `Aqui estão todas as operações com o número ${number1} e ${number2}: \n Soma: ${sum(number1, number2)}\n Subtração: ${sub(number1, number2)}\n Multiplicação: ${mult(number1, number2)}\n Divisão: ${div(number1, number2)}`, "utf-8", (err) => {
    if(err){
        console.log("Algo deu errado: ", err)
        return
    }

    console.log("Cálculo realizado com sucesso")

})

fs.readFile("./Calculadora.txt", "utf-8", (err, data) => {
    if(err){
        console.log("Algo deu errado: ", err)
        return
    }

    console.log(data)
})