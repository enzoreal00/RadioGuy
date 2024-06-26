# Sistema de armazenamento de música
Este é um sistema simples escrito em node.js que consiste em armazenar as informações de uma música, editar, deletar e apresenta-las ao usuário através do terminal.

## Estrutura do código

### Módulos e variáveis

- `readline`: Módulo utilizado para ler a entrada do usuário no terminal.
- `rl`: Interface criada para ler e escrever no terminal.
- `musicas`: Array usado para armazenar as músicas, sendo cada música um objeto contendo as propriedades `Nome`, `Artista`, `Gênero`, `Produtora` e `Ano`.

### Funções principais

1. `exibirMenu()`: Função principal que exibe para o usuário o menu de opções e determina as funções correspondentes para cada com base na escolha do usuário.
2. `adicionar()`: Função utilizada para que o usuário adicione uma nova música.
3. `listar()`: Lista todas as músicas armazenadas.
4. `editar()`: Permite que o usuário edite as informações da música que desejar.
5. `deletar()`: Permite que o usuário delete a música que desejar.

### Decisões de Design

- *Interface Simples*: Código e interface baseado em texto, com mais facilidade de entendimento e uso.
- *Validação Básica*: O sistema verifica se a entrada do usuário é válida antes de realizar operações de edição e deletar, por exemplo

## Utilização do Sistema

### Requisitos

- Node.js instalado no sistema.

### Execução

1. Clone o repositório RadioGuy no GitHub ou copie o código para um arquivo `RadioGuy.js`.
2. Mo terminal, navegue até o diretório onde o arquivo se localiza.
3. Execute o programa com o comando:
    ```bash
    node lembretes.js
     ```
