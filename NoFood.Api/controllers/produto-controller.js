"use strict"

const repository = require("../repositories/produto-repository")

class produtoController {
  constructor() {
    // this.create = this.create.bind(this)
  }

  async get(req, res) {
    let produtos = await new repository().getAll()
    res.status(200).send(produtos)
  }

  async getById(req, res) {
      let produto = await new repository().getById(req.params.id, req.body)
      res.status(200).send(produto)
  }

  async post(req, res) {
      let produto = await new repository().create(req.body)
      res.status(201).send(produto)
  }

  async put(req, res) {
      let produto = await new repository().update(req.params.id, req.body)
      res.status(202).send(produto)
  }

  async delete(req, res) {
      await new repository().delete(req.params.id)
      res.status(204).send(`Produto ${req.params.id} removido com sucesso!`)
  }
}

module.exports = produtoController
