const router = require('express')()
const produtosController = require('./controllers/ProdutosRouters')
const usuariosController = require("./controllers/UsuariosRouters")
const pedidosController = require("./controllers/PedidosRouters")
const bodyParser = require('body-parser')
const cors = require("cors")
const morgan = require("morgan")

router.use(cors())
router.use(morgan("dev"))
router.use(bodyParser.json())
router.use('/', produtosController)
router.use('/', usuariosController)
router.use('/', pedidosController)

module.exports = router