const Usuario = require('../database/usuarios')
const jwt = require('jsonwebtoken')
module.exports= {
    get: async (req,res) => {
        try{
            const busUsuarios = await Usuario.findAll()
            return res.status(200).json( {error:false,response:busUsuarios} )
        }
        catch(e){
            return res.status(404).json( {error:true,response:e})
        }
    },
    post: async (req,res) => {
        const dadUsuarios = req.body
        try{
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
                    await Usuario.create(dadUsuarios)
                    //TOKEN DE AUTENTICAÇÃO
                    const jwtToken = jwt.sign({name:dadUsuarios.nome},process.env.SECRET,{algorithm: "HS384",expiresIn:"30days"})
                    //RETORNA MESSAGEM DE SUCESSO COM DADOS E TOKEN
                    return res.status(201).json({error:false,response:"Successfully created",dadUsuarios,jwtToken})
                }else{
                    //ERRO CASO CPF JÁ ESTEJA REGISTRADO
                    return res.status(422).json({error:true,response:"cpf already registered"})
                }
            }
            else{
                return res.status(400).json({error:false,response:"Invalid cpf"})
            }   
        }catch(e){
            return res.status(400).json({error:true,response:"inappropriate order"})
        }
    },
    delete: async (req,res) => {
        const id = req.params.id_usuario
        try{
            const user = await Usuario.findOne({where:{id}})
            if(user != undefined){
                await Usuario.destroy({where:{id}})
                return res.status(200).json({error:false,response:'User deleted',user})
            }
            else{
                res.status(404).json({error:true,response:"Non-existent user"})
            }
        }catch(e){
            return res.status(400).json({error:true,response:'inappropriate order'})
        }
    },
    patch:async (req,res) => {
        const id = req.params.id_usuario
        const update = req.body
        if(update.nome && !update.cpf && !update.id){
            try{
                const dados = await Usuario.findOne({where:{id}})
                if(dados != null){
                    await Usuario.update(update,{where:{id}})
                    return res.status(200).json({error:false,response:"Updated user",update})
                    
                }
                else{
                    res.status(404).json({error:true,response:"Non-existent user"})
                }
            }catch(e){
                res.status(400).json({error:true,response:"Unable to update non-existent user"})
            }
        }
        else{
            return res.status(400).json({error:true,response:'inappropriate order'})
        }
    }
}