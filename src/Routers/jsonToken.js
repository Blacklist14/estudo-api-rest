// Verifica JWT
require("dotenv").config()
const jwt = require("jsonwebtoken")

function verifyJWT (req,res,next){
    const token = req.headers.token
    if(!token){return res.status(401).send({auth:false,message:"No token provided"})}
    jwt.verify(token,process.env.SECRET,(err,decoded)=>{
        if(err){return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });}
        next()
    })
}

module.exports = verifyJWT