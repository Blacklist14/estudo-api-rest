const express = require("express");
const Usuario = require("../DATABASE/usuarios");
const router = express.Router();

// Pega todos usuarios
router.get("/Usuarios",async (req,res) => {
    const busUsuarios = await Usuario.findAll()
    if(busUsuarios <= [0]){
        return res.status(404).json({message:"Nenhum usuario"})
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
            const novoUsuario = await Usuario.create(dadUsuarios)
            return res.status(201).json({message:"Criado com sucesso",dadUsuarios})
        }else{
            return res.status(404).json({mesagem:"cpf já registrado"})
        }
    }
    else{
        return res.status(400).json({message:"cpf invalido"})
    }
  
})
// Deleta um usuario
router.delete("/Usuarios/:id_usuario",async (req,res) => {
    const id = req.params.id_usuario
    const dados = await Usuario.findAll({where:{id}})
    if(dados >= [0]){
        const delUsuario = await Usuario.destroy({where:{id}})
        return res.status(200).json({mesagem:"Usuario deletado",dados})
    }
    else{
        return res.status(404).json({mesagem:"Usuario inexistente"})
    }
})
// Atualiza dados usuario
router.patch("/Usuarios/:id_usuario",async (req,res) => {
    const id = req.params.id_usuario
    const dadosUP = req.body
    const dados = await Usuario.findAll({where:{id}})
    if(dados >= [0]){
        const filtUsuario = await Usuario.update(dadosUP,{where:{id}})
        return res.status(200).json({mesagem:"Usuario atualizado",dadosUP})    
    }
    else{
        res.status(404).json({mesagem:"Usuario inexistente"})
    }

})

module.exports = router;