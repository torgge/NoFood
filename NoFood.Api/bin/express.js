const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const variables = require('../bin/configuration/variables')

//Routes
const categoriaRouter = require('../routes/categoria-router')
const produtoRouter = require('../routes/produto-router')
const usuarioRouter = require('../routes/usuario-router')

//Criando/Invocando a Api/Server Web do Express
const app = express()

//Configuração de Parse de JSON.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Configura conexao com banco de dados.
mongoose.connect(variables.Database.connection, {useNewUrlParser: true})
mongoose.set('useFindAndModify', false)

//Configurando as Rotas
app.use('/api/categoria', categoriaRouter)
app.use('/api/produto', produtoRouter)
app.use('/api/usuario', usuarioRouter)

module.exports = app