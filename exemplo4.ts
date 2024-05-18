// function soma(numero1: number, numero2: number) {
//     return numero1 + numero2
// }

// const soma2 = (numero1: number, numero2: number) => {
//     return numero1 + numero2
// }

// console.log(soma2(6, 12a))

function nomeCompleto(nome: string, sobrenome: string): string {
    return `${nome} ${sobrenome}`
}

const nomeCompleto2 = (nome: string, sobrenome: string): void => {
    console.log(`${nome} ${sobrenome}`)
}

console.log(nomeCompleto('lucas', 'gomes'))

nomeCompleto2('João', 'Silva')