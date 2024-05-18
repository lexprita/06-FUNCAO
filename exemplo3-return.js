function nomeCompleto(nome, sobrenome) {
    // console.log(`${nome} ${sobrenome}`)
    const nomeUsuario = `${nome} ${sobrenome}`
    return nomeUsuario
}

// nomeCompleto('Lucas', 'Gomes')

// console.log(nomeCompleto('Lucas', 'Gomes'))
const imprimir = nomeCompleto('Lucas', 'Gomes')

console.log(imprimir)

function verificaIdade(idade) {
    if (idade <= 17) {
        return 'Não é maior de idade'
    }
    return 'É maior de idade'
}

//arrow function : função de flecha, escrever uma função e atribuir essa função na variavel 

const verificaidade2 = (idade) => {
    if (idade <= 17) {
        return 'Não é maior de idade'
    }
    return 'É maior de idade'
}

console.log(verificaidade2(18))