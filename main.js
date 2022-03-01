const app = require('express')()
const bodyParser = require('body-parser')
const produtosController = require('./Routers/ProdutosRouters')
const usuariosController = require("./Routers/UsuariosRouters")
const pedidosController = require("./Routers/PedidosRouters")
require("dotenv").config()
const cors = require("cors")
const morgan = require("morgan")

const port = process.env.PORT

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use('/', produtosController)
app.use('/', usuariosController)
app.use('/',pedidosController)

app.listen(port, () => {
    console.log('Servidor on em http://localhost:' + port)
})