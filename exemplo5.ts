
type TUsuario = {
    nome: string,
    idade: number,
    email: string
}

const usuarios: TUsuario[] = []

// function cadastrarUsuario(usuario: TUsuario) { 
//     usuarios[usuarios.length] = {
//         nome: usuario.nome,
//         email: usuario.email,
//         idade: usuario.idade
//     }
// }

function cadastrarUsuario(usuario: TUsuario) {
    usuarios[usuarios.length] = usuario
    return usuario
}

const resultado = cadastrarUsuario({
    nome: 'lucas',
    email: 'lucas@hotmai.com',
    idade: 32
})

console.log(resultado)
console.log(usuarios)