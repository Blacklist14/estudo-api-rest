const router = require('express')()
const produtosController = require('./Routers/ProdutosRouters')
const usuariosController = require("./Routers/UsuariosRouters")
const pedidosController = require("./Routers/PedidosRouters")
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')


router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
router.use('/', produtosController)
router.use('/', usuariosController)
router.use('/', pedidosController)

module.exports = router