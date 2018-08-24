"use strict"

const repository = require("../repositories/usuario-repository")
const _repo = new repository()

class usuarioController {
    constructor() {
        // this.create = this.create.bind(this)
    }

    async get(req, res) {
        let result = await _repo().getAll()
        res.status(200).send(result)
    }

    async getById(req, res) {
        let result = await _repo().getById(req.params.id, req.body)
        res.status(200).send(result)
    }

    async post(req, res) {
        let result = await _repo().create(req.body)
        res.status(201).send(result)
    }

    async put(req, res) {
        let result = await _repo().update(req.params.id, req.body)
        res.status(202).send(result)
    }

    async delete(req, res) {
        await _repo().delete(req.params.id)
        res.status(204).send(`Usuario ${req.params.id} removido com sucesso!`)
    }
}

module.exports = usuarioController