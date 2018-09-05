'use strict'

const jwt = require('jsonwebtoken')
const variables = require('../bin/configuration/variables')

module.exports = async (req, res, next) => {
    let token = req.body.token || req.query.query || req.headers['x-access-token']
    if (token) {
        try {
            let decoded = await jwt.verify(token, variables.Security.secretkey)
            console.log(decoded)
            req.usuarioLogado = decoded
            next()
        } catch (error) {
            console.log(error)
            res.status(401).send({message: `Token iformado ${token} é inválido...`})
            return
        }
    } else {
        res.status(401).send({message: `Você precisa informar um token para acessar esse recurso`})
        return
    }
}