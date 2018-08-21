'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const categoriaModel = new schema({
    titulo: {trim:true, index:true, required:true, type:String},
    descricao: {type: String},
    ativa: {required: true, type: Boolean},
    foto: {required: true, type: String},
    dataCriacao: {type: Date, default: Date.now}
}, {versionKey: false})

categoriaModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora
    next()
})

module.exports = mongoose.model('Categoria', categoriaModel)