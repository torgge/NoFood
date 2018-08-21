'use strict'

const mongoose = require('mongoose')

class repositoryBase {

    constructor(model) {
        this._model = mongoose.model(model)
    }

    async create(data) {
        let model = new this._model(data)
        let resultado = await model.save()
        return resultado
    }

    async update(id, data) {
        await this._model.findByIdAndUpdate(id, {$set: data})
        let resultado = await this._model.findById(id)
        return resultado
    }

    async getById(id) {
        let model = await this._model.findById(id)
        return model
    }

    async getAll() {
        return await this._model.find()
    }

    async delete(id) {
        return await this._model.findByIdAndRemove(id)
    }
}

module.exports = repositoryBase