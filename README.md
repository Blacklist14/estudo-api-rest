# Tópicos do Projeto
- [Guia para instalação](#guia-para-instalação)
- [Guia TEMPORÁRIO de consumo](#guia-temporário-de-consumo)
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

# Guia TEMPORÁRIO de consumo
* Utilize o [insomnia](https://insomnia.rest/download) para fazer as requisições!!

* Primeiro crie um usuário para obter o token para permitir acesso.
- Use o metodo POST em http://localhost:3006/Usuarios para pegar.
![Screenshot_1](https://user-images.githubusercontent.com/79177415/156449169-aaf2665d-a2e6-448c-8915-d22aa677f6c8.png)

* Perceba que a resposta um JSON, tem o jwtToken que e necessário para as outras requisições.( coloque o token na query token)

- Use o metodo GET em http://localhost:3006/Usuarios, pegara todos os usuários registrados,lembre-se de colocar a QUERY token!!!.
![Screenshot_2](https://user-images.githubusercontent.com/79177415/156449982-e1ef095a-8d8f-4f1e-a7ec-c6dc71231dad.png)

# Sobre repositório
* Uma API sem autenticação com três tabelas.
* Tabelas (usuários,produtos,pedidos).
* Cada tabela possuí um CRUD.


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
- [x] Adicionar JWT em Usuarios
- [x] Adicionar JWT em Produtos
- [x] Adicionar JWT em Pedidos
- [ ] Criando Documentação da API.