const Produto = require('../models/Produto')

const cadastrar = async (req,res)=>{
    const valores = req.body
    console.log(valores)

    if(!valores.nomeProduto || !valores.categoria
        || !valores.precoUnitario || !valores.qtdeEstoque || !valores.data){
        return res.status(400).json({message: 'Todos os campos são Obrigatórios!'})
    }

    try{
        await Produto.create(valores)
        res.status(200).json({message: 'Produto cadastrado com sucesso!'})
    }catch(err){
        console.error('Erro ao cadastrar o Produto',err)
        res.status(500).json({message: 'Erro ao cadastrar o Produto'})
    }
}
const consultar = async (req,res)=>{
    const id = req.params.id
    console.log('Código do Produto = ',id)

    if(!id){
        return res.status(400).json({message: 'O código do produto é Obrigatório!'})
    }
    try {
        const produto = await Produto.findByPk(id)
        
        if(!produto){
            return res.status(404).json({message: 'produto não encontrado'})
        }

        res.status(200).json(produto)
    } catch (err) {
        console.error('Erro ao consultar o produto!',err)
        res.status(500).json({message: 'Erro ao consultar o produto!'})
    }
}
const listar = async (req,res)=>{
    try{
        const dados = await Produto.findAll()
        res.status(200).json(dados)

    }catch(err){
        console.error('Erro ao listar os produtos!',err)
        res.status(500).json({message: 'Erro ao listar os produtos!'})
    }
}
const apagar = async (req,res)=>{
    const id = req.params.id
    console.log('Código do Produto = ',id)

    if(!id){
        return res.status(400).json({message: 'O código do produto é Obrigatório!'})
    }
    try {
        const produto = await Produto.findByPk(id)
        
        if(!produto){
            return res.status(404).json({message: 'produto não encontrado'})
        }
        
        await Produto.destroy({where: {codProduto: id}})

        res.status(200).json({message: 'produto apagado com sucesso!'})
    } catch (err) {
        console.error('Erro ao apagar o produto!',err)
        res.status(500).json({message: 'Erro ao apagar o produto!'})
    }
}
const atualizar = async (req,res)=>{
    const id = req.params.id
    console.log('Código do produto = ',id)
    const valores = req.body
    console.log(valores)

    if(!id){
        return res.status(400).json({message: 'O código do produto é Obrigatório!'})
    }
    if(!valores){
        return res.status(400).json({message: 'Todos os campos são Obrigatório!'})
    }
    try {
        const produto = await Produto.findByPk(id)
        
        if(!produto){
            return res.status(404).json({message: 'produto não encontrado'})
        }

        await Produto.update(valores, {where: {codProduto: id}})

        const dados = await Produto.findByPk(id)

        res.status(200).json(dados)
    } catch (err) {
        console.error('Erro ao consultar o produto!',err)
        res.status(500).json({message: 'Erro ao consultar o produto!'})
    }
}

module.exports = { cadastrar, consultar, listar, apagar, atualizar }