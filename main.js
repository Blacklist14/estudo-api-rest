const app = require('express')()
const userRouters = require('./Routers/userRouters')

const port = 3000

app.use('/', userRouters)

app.listen(port,() => {
    console.log('Servidor on em http://localhost:' + port)
})
