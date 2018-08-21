"use strinct"

require("../models/categoria-model")
const mongoose = require("mongoose")
const CategoriaModel = mongoose.model("Categoria")

class categoriaRepositoy {
  constructor() {}

  async create(data) {
    let categoria = new CategoriaModel(data)
    let resultado = await categoria.save()
    return resultado
  }

  async update(id, data) {
    await CategoriaModel.findByIdAndUpdate(id, { $set: data })
    let resultado = await CategoriaModel.findById(id)
    return resultado
  }

  async getById(id) {
    let categoria = await CategoriaModel.findById(id)
    return categoria
  }

  async getAll() {
    return await CategoriaModel.find()
  }

  async delete(id) {
    await CategoriaModel.findByIdAndRemove(id)
  }
}

module.exports = categoriaRepositoy
