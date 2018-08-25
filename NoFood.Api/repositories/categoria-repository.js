"use strinct"

require("../models/categoria-model")
const base = require('../bin/base/repository-base')

class categoriaRepositoy {

    constructor() {
        this._base = new base('Categoria')
    }

    async create(data) {
        return await this_base.create(data)
    }

    async update(id, data) {
        return await this._base.update(id, data)
    }

    async getById(id) {
        return await this._base.getById(id)
    }

    async getAll() {
        return await this._base.getAll()
    }

    async delete(id) {
        return await this._base.delete(id)
    }
}

module.exports = categoriaRepositoy