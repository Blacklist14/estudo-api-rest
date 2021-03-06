# Tópicos do Projeto
- [Guia para instalação](#guia-para-instalação)
- [Documentação completa](#Documentação)
- [Sobre repositório](#sobre-repositório)
- [Dependências usadas](#dependências-usadas)
- [Objetivos](#objetivos)

# Guia para instalação

* Para instalar dependências digite no terminal oque esta  aqui ⬇️

```
npm install
```
```
docker-compose up
```
* Abra um novo terminal para iniciarmos o servidor ⬇️
```npm
npm start
```
* Crie um .env usando o arquivo .env_exemplo como exemplo.

# Documentação
* Acesse http://localhost:3006/doc para ver

# Sobre repositório
* Uma API com autenticação usando JWT e usando BANCO DE DADOS.
* Tabelas (usuários,produtos,pedidos).

# Dependências usadas
* express: 4.17.2
* mysql2: 2.3.3
* nodemon: 2.0.15
* sequelize: 6.16.1
* body-parser: 1.19.2
* cors: 2.8.5
* docker-compose: 0.23.17
* dotenv: 16.0.0
* jsonwebtoken: 8.5.1
* morgan: 1.10.0

# Objetivos

- [x] Criar imagem Mysql e conectar com Sequelize.
- [x] Criar CRUD para Usuarios.
- [x] Criar CRUD para Produtos.
- [x] Criar CRUD para Pedidos.
- [x] Usar Variavel de Ambiente
- [x] Adicionar JWT
- [X] Criando Documentação da API.
