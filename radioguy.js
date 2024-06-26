const { generateKey } = require('crypto')
const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

let musicas = []

exibirMenu()

function exibirMenu() {
    console.log(`
    1. Adicionar música
    2. Listar músicas
    3. Editar músicas 
    4. Deletar música
    5. Sair
    `)

rl.question(`Escolha uma opção: `, (opcao) => {
    switch (opcao) {
        case '1':
            adicionar()    
            break;
        case '2':
            listar()    
            break;
        case '3':
            editar()    
            break;
        case '4':
            deletar()    
            break;
        case '5':
            console.log("Okay, fechando o programa!")
            rl.close()
            break;
        default:
            console.log("Opção inválida")
            exibirMenu()
    }
})
}

function adicionar() {
    rl.question('Digite o nome da música: ', (nome) => {
        rl.question('Digite o nome do artista: ', (artista) => {
            rl.question('Digite o genêro músical: ', (genero) => {
                rl.question('Digite a produtora da música: ', (produtora) => {
                    rl.question('Digite o ano da música: ', (ano) => {
                        musicas.push({nome: nome, artista: artista, genero: genero, produtora: produtora, ano: ano})
                        console.log('Música cadastrada com sucesso!')
                        exibirMenu()
                    })
                })
            })
        })
    })
}

function listar() {
    if (musicas.length > 0) {
        for (let i = 0; i < musicas.length; i++) {
            console.log(musicas[i])
        }
        exibirMenu()
    } else {
        console.log('Nenhuma música cadastrada.')
        exibirMenu()
    }
}

function editar() {
    if(musicas.length == 0) {
        console.log('Não há músicas cadastradas.')
        exibirMenu()
    } else {
        rl.question('Qual música você deseja editar? ', (opcao) => {
            if(opcao > 0 && opcao <= musicas.length) {
                rl.question('Digite o novo nome: ', (nome) => {
                    rl.question('Digite o novo nome do artista: ', (artista) => {
                        rl.question('Digite o novo genêro: ', (genero) => {
                            rl.question('Digite a nova produtora: ', (produtora) => {
                                rl.question('Digite o novo ano da música: ', (ano) => {
                                    musicas[opcao - 1] = {
                                        nome,
                                        artista,
                                        genero,
                                        produtora,
                                        ano
                                    }
                                console.log('Editado com sucesso!')
                                exibirMenu()
                                })
                            })
                        })
                    })
                })
            }
        })
    }
}

function deletar() {
    if (musicas.length == 0) {
        console.log('Não há músicas cadastradas.')
        exibirMenu()
    } else {
        console.log('Lista de músicas')
        musicas.forEach((musicas, index) => {
            console.log(`${index + 1}.${musicas.nome}`)
        })
            rl.question('Digite o número da música que deseja remover: ', (opcao) => {
                if (opcao > 0 && opcao <= musicas.length) {
                    musicas.splice(opcao - 1, 1)
                    console.log('Música removida com sucesso!')
                    exibirMenu()
                } else {
                    console.log('Número inválido, tente novamente.')
                    exibirMenu()
                }
            })
    }
}