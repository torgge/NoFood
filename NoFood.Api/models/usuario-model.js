'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const produtoModel = new schema({
    nome:{type: String, required: true, trim: true, index: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    foto: {type: String},    
    ativo: {type: Boolean, required: true, default: true},
    dataCriacao: {type: Date, default: Date.now}
}, {versionKey : false})

produtoModel.pre('save', next => {
    let agora = new Date()
    if (!this.dataCriacao)
        this.dataCriacao = agora
    next()
})

module.exports = mongoose.model('Usuario', produtoModel)