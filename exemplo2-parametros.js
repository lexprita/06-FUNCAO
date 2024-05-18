const usuarios = []


// function cadastrarUsuario(nome, email, idade) {
//     usuarios[usuarios.length] = {
//         nome,
//         email,
//         idade
//     }
// }
// cadastrarUsuario('Lucas', 'lucas@gmail.com', 33)
// // console.log(usuarios)
// cadastrarUsuario('Ana', 'ana@gmail.com', 22)


// console.log(usuarios)

function cadastrarUsuario(usuario) {
    usuarios[usuarios.length] = {
        nome: usuario.nome,
        email: usuario.email,
        idade: usuario.email
    }
}
// passando objeto direto

cadastrarUsuario({
    nome: 'Lucas',
    email: 'lucas@gmail.com',
    idade: 32
})

// criando variável para passar objeto

const maria = {
    nome: 'Maria',
    email: 'maria@gmail.com',
    idade: 20
}


cadastrarUsuario(maria)

console.log(usuarios)