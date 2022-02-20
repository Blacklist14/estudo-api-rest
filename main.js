const app = require('express')()
const bodyParser = require('body-parser')
const Swagger = require("swagger-ui-express")
const produtosController = require('./Routers/ProdutosRouters')
const usuariosController = require("./Routers/UsuariosRouters")
const pedidosController = require("./Routers/PedidosRouters")
const swaggerDocs = require("./swagger.json");

const morgan = require("morgan")

const port = 3006

app.use("/api-docs",Swagger.serve,Swagger.setup(swaggerDocs))
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use('/', produtosController)
app.use('/', usuariosController)
app.use('/',pedidosController)
app.listen(port, () => {
    console.log('Servidor on em http://localhost:' + port)
})