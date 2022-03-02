const express = require("express");
const Usuario = require("../DATABASE/usuarios");
const verifyJWT = require("./jsonToken")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const router = express.Router();

// Pega todos usuarios
router.get("/Usuarios",verifyJWT,async (req,res) => {
    const busUsuarios = await Usuario.findAll()
    if(busUsuarios <= [0]){
        return res.status(204).json({message:"Nenhum usuario"})
    }else{
        return res.status(200).json(busUsuarios)
    }
})
// Cria novo usuario
router.post("/Usuarios", async (req,res) => {
    const dadUsuarios = req.body
    const validaCPF = (cpf) => {
        if(cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)){
            return true
        }
        else{return false}
    }
    if(validaCPF(dadUsuarios.cpf) === true){
        const verifiCPF = await Usuario.findAll({
            where:{
                cpf:dadUsuarios.cpf
            }
        })
        if(verifiCPF <= [0]){
            const novoUsuario = await Usuario.create(dadUsuarios).then(() => {
                //TOKEN DE AUTENTICAÇÃO
                const jwtToken = jwt.sign({name:dadUsuarios.nome},process.env.SECRET,{algorithm: "HS384",expiresIn:"30days"})
                //RETORNA MESSAGEM DE SUCESSO COM DADOS E TOKEN
                return res.status(201).json({message:"successfully created",dadUsuarios,jwtToken})
            },() => {
                //ERRO CASO REQUISIÇÃO ESTEJA ERRADA
                return res.status(404).json({mesagem:"missing information"})
            })
        }else{
            //ERRO CASO CPF JÁ ESTEJA REGISTRADO
            return res.status(404).json({mesagem:"cpf already registered"})
        }
    }
    else{
        return res.status(400).json({message:"invalid cpf"})
    }
  
})
// Deleta um usuario
router.delete("/Usuarios/:id_usuario",verifyJWT,async (req,res) => {
    const id = req.params.id_usuario
    const dados = await Usuario.findAll({where:{id}})
    if(dados >= [0]){
        const delUsuario = await Usuario.destroy({where:{id}}).then(()=>{
            return res.status(200).json({mesagem:"Usuario deletado",dados})
        },()=>{
            return res.status(204).json({mesagem:"Usuario inexistente"})
        })
    }
    else{
        return res.status(204).json({mesagem:"Usuario inexistente"})
    }
})
// Atualiza dados usuario
router.patch("/Usuarios/:id_usuario",verifyJWT,async (req,res) => {
    const id = req.params.id_usuario
    const dadosUP = req.body
    const dados = await Usuario.findAll({where:{id}})
    if(dados >= [0]){
        const filtUsuario = await Usuario.update(dadosUP,{where:{id}})
        return res.status(200).json({mesagem:"Usuario atualizado",dadosUP})    
    }
    else{
        res.status(204).json({mesagem:"Usuario inexistente"})
    }

})

module.exports = router;