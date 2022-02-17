- [Guia para instalação](#Guia-para-instalação)
- [Guia para uso](#Guia-para-uso)
- [Sobre repositório](#Sobre-repositório)
- [Dependências usadas](#Dependências-usadas)
- [Objetivos](#Objetivos)

# Guia para instalação
* Para instalar dependências digite no terminal oque esta  aqui ⬇️

```
npm init
docker-compose up
```
* Abra um novo terminal para iniciarmos o servidor ⬇️
```npm
npm start
```
* Após isso baixe o [insomnia](https://insomnia.rest/download) para conseguir consultar a API
* Vídeo ensinando a como usar o [insomnia](https://www.youtube.com/watch?v=gLpw0GSDYaw)
# Guia para uso
### Produtos
* Para criar produtos basta enviar um JSON com os campos NOME,PREÇO e DESCRIÇÃO (POST)
![post](https://user-images.githubusercontent.com/79177415/154580624-ae9e86f3-ec59-43e4-9e10-76b57be327ce.png)



* Para verificar todos produtos listados (GET)
![get](https://user-images.githubusercontent.com/79177415/154579617-23b1d425-df9a-4045-9072-0b22e7708bbf.png)
* para fazer um delete adicione um parametro com ID do produto por exemplo( http://localhost:3005/Produtos/22 )
![delete](https://user-images.githubusercontent.com/79177415/154581211-99666326-3aa0-43eb-b447-4500cc963376.png)


# Sobre repositório
* Estou estudando docker e  CRUD mas também irei tentar aplicar SOLID.

# Dependências usadas
* express: 4.17.2
* mysql2: 2.3.3
* nodemon: 2.0.15
* sequelize: 6.16.1

# Objetivos

- [x] Criar imagem Mysql e conectar com Sequelize
- [ ] Criar CRUD para clients
- [x] Criar CRUD para Produtos 0bs(FALTANDO UPDATE DE PRODUTOS)
- [ ] Criar CRUD para Pedidos
