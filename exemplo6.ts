// const pessoa = {


// }


// function soma(numero1: number, numero2: number): number {
//     return numero1 + numero2
// }

// const funcaoNaVariavel = soma

// console.log(funcaoNaVariavel(3, 5))

type TPessoa = {
    nome: string
    sobrenome: string
    nomeCompleto: () => void
}

type TPessoa2 = {
    nome: string
    sobrenome: string
    nomeCompleto: (idade: number) => void
}
const pessoa: TPessoa = {
    nome: 'Lucas',
    sobrenome: 'Gomes',
    nomeCompleto: function () {
        console.log(`${pessoa.nome} ${pessoa.sobrenome}`)
    }

}
const pessoa2 = {
    nome: 'João',
    sobrenome: 'Gomes',
    nomeCompleto: function (idade: number) {
        console.log(`${this.nome} ${this.sobrenome} ${idade} anos`)
    }

}

pessoa2.nomeCompleto(32)