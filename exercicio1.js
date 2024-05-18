

const usuario = {
    nome: 'Lucas',
    idade: 32,
    profissao: 'estudante',
    altura: 1.75
}

function imprimir(dadosUsuario) {

    console.log(`Olá! Meu nome é ${dadosUsuario.nome}, 
    sou um jovem de ${dadosUsuario.idade}, ${dadosUsuario.altura}, 
    e sou ${dadosUsuario.profissao}`)

}
imprimir(usuario)
// console.log(`Olá! Meu nome é ${nome}, sou um jovem de ${idade}, ${altura}, e sou ${profissao} `)