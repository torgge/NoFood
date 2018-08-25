"use strict"

const repository = require("../repositories/categoria-repository")

function categoriaController() {}

categoriaController.prototype.get = async (req, res) => {
  let categorias = await new repository().getAll()
  res.status(200).send(categorias)
}
categoriaController.prototype.getById = async (req, res) => {
  let model = await new repository().getById(req.params.id, req.body)
  res.status(200).send(model)
}
categoriaController.prototype.post = async (req, res) => {
  let modelo = await new repository().create(req.body)
  res.status(201).send(modelo)
}
categoriaController.prototype.put = async (req, res) => {
  let categoriaAlterada = await new repository().update(req.params.id, req.body)
  res.status(202).send(categoriaAlterada)
}
categoriaController.prototype.delete = async (req, res) => {
  let modeloDeletado = await new repository().delete(req.params.id)
  res.status(204).send(modeloDeletado)
}

module.exports = categoriaController