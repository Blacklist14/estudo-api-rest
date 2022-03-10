const Usuario = require("../database/usuarios");
const jwt = require("jsonwebtoken")
module.exports= {
    get: async (req,res) => {
        const busUsuarios = await Usuario.findAll()
        if(busUsuarios != []){
            return res.status(200).json(busUsuarios)
        }else{
            return res.status(404).json({Error:"No registered user"})
        }
    },
    post: async (req,res) => {
        const dadUsuarios = req.body
        const validaCPF = (cpf) => {
            if(cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)){
                return true
            }
            else{return false}
        }
        if(validaCPF(dadUsuarios.cpf) === true){
            const verifiCPF = await Usuario.findOne({
                where:{
                    cpf:dadUsuarios.cpf
                }
            })
            if(verifiCPF == null){
                const novoUsuario = await Usuario.create(dadUsuarios).then(() => {
                    //TOKEN DE AUTENTICAÇÃO
                    const jwtToken = jwt.sign({name:dadUsuarios.nome},process.env.SECRET,{algorithm: "HS384",expiresIn:"30days"})
                    //RETORNA MESSAGEM DE SUCESSO COM DADOS E TOKEN
                    return res.status(201).json({message:"Successfully created",dadUsuarios,jwtToken})
                },() => {
                    //ERRO CASO REQUISIÇÃO ESTEJA ERRADA
                    return res.status(404).json({mesagem:"Missing information"})
                })
            }else{
                //ERRO CASO CPF JÁ ESTEJA REGISTRADO
                return res.status(404).json({Error:"cpf already registered"})
            }
        }
        else{
            return res.status(400).json({Error:"Invalid cpf"})
        }
      
    },
    delete: async (req,res) => {
        const id = req.params.id_usuario
        const dados = await Usuario.findOne({where:{id}})
        console.log(dados)
        if(dados != undefined){
            const delUsuario = await Usuario.destroy({where:{id}}).then(()=>{
                return res.status(200).json({Success:"User deleted",dados})
            },()=>{
                return res.status(404).json({Error:"Non-existent user"})
            })
        }
        else{
            res.status(404).json({Error:"Non-existent user"})
        }
    },
    patch:async (req,res) => {
        const id = req.params.id_usuario
        const dadosUP = req.body
        const dados = await Usuario.findOne({where:{id}})
        if(dados != null){
            const filtUsuario = await Usuario.update(dadosUP,{where:{id}}).then(()=>{
                return res.status(200).json({Success:"Updated user",dadosUP})    
            },()=>{
                res.status(400).json({Error:"Unable to update non-existent user"})
            })
        }
        else{
            res.status(404).json({Error:"Non-existent user"})
        }
    
    }
}