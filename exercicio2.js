// const verificaidade2 = (idade) => {
//     if (idade < 21) {
//         return 'Jovem'
//     } else if (idade >= 22 || idade <= 66) {
//         return 'Adulto(a)'
//     }
//     return 'Idoso(a)'
// }
//NÃO RETORNOU O FINAL DA IDADE, PQ FALTOU O &&(ou) PARA COMPARAR AS DUAS CONDIÇÕES


const verificaidade2 = (idade) => {
    if (idade <= 21) {
        return 'Jovem'
    } else if (idade >= 22 && idade <= 65) {
        return 'Adulto(a)'
    }
    return 'Idoso(a)'
}
console.log(verificaidade2(65))

function faixaEtaria(idade) {
    if (idade <= 21) {
        return 'Jovem'
    } else if (idade >= 22 && idade <= 65) {
        return 'Adulto(a)'
    } return 'Idoso(a)'
}

console.log(faixaEtaria(66))