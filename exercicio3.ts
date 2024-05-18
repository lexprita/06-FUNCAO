const operacoes = {

    soma: function (number1: number, number2: number) {
        return number1 + number2
    },
    subtrancao: function (number1: number, number2: number) {
        return number1 - number2
    },
    divisao: function (number1: number, number2: number) {
        return number1 / number2
    },
    multi: function (number1: number, number2: number) {
        return number1 * number2
    }
}
// operacoes.soma(5, 10)
console.log(operacoes.soma(5, 10))
console.log(operacoes.subtrancao(5, 10))
console.log(operacoes.divisao(5, 10))
console.log(operacoes.multi(5, 10))

//=========================================================//

type TFuncaoCalc = (numero1: number, number2: number) => number

type TCalculadora = {
    soma: TFuncaoCalc
    subt: TFuncaoCalc
    mult: TFuncaoCalc
    divi: TFuncaoCalc
}

const calculadora: TCalculadora = {
    soma: function (number1: number, numero2: number): number {
        return number1 + numero2
    },
    subt: function (number1: number, numero2: number): number {
        return number1 - numero2
    },
    mult: function (number1: number, numero2: number): number {
        return number1 * numero2
    },
    divi: function (number1: number, numero2: number): number {
        return number1 / numero2
    }
}

console.log(calculadora.soma(5, 10))
console.log(calculadora.subt(5, 10))
console.log(calculadora.divi(5, 10))
console.log(calculadora.mult(5, 10))