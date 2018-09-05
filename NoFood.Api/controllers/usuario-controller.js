"use strict"

const repository = require("../repositories/usuario-repository")
const ctrlBase = require('../bin/base/controller-base')
const validation = require('../bin/helpers/validation')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const variables = require('../bin/configuration/variables')

const _repo = new repository()


class usuarioController {
    constructor() {

    }

    async get(req, res) {
        ctrlBase.get(_repo, req, res)
    }

    async getById(req, res) {
        ctrlBase.getById(_repo, req, res)
    }

    async post(req, res) {
        let _validationContract = new validation()

        _validationContract.isRequired(req.body.nome, 'Informe seu nome')
        _validationContract.isRequired(req.body.email, 'Informe seu email')
        _validationContract.isEmail(req.body.email, 'O email informado é invalido')
        _validationContract.isRequired(req.body.senha, 'A senha informada é iválida.')
        _validationContract.isRequired(req.body.senhaConfirmacao, 'A senha de confirmação é obrigatória.')
        _validationContract.isTrue(req.body.senha != req.body.senhaConfirmacao, 'A senha e a confirmação não são iguais.')

        let usuarioIsEmailExists = await _repo.isEmailExists(req.body.email)
        if (usuarioIsEmailExists) {
            _validationContract.isTrue(usuarioIsEmailExists.nome != undefined, `O email: ${req.body.email} já existe.`)
        }


        //Criptografa Senha
        req.body.senha = md5(req.body.senha)

        ctrlBase.post(_repo, _validationContract, req, res)
    }

    async put(req, res) {
        let _validationContract = new validation()

        _validationContract.isRequired(req.body._id, 'Informe o Id do usuário que alterado')
        _validationContract.isRequired(req.body.nome, 'Informe seu nome')
        _validationContract.isRequired(req.body.email, 'Informe seu email')
        _validationContract.isEmail(req.body.email, 'O email informado Ã© invalido')

        let usuarioIsEmailExists = await _repo.isEmailExists(req.body.email)
        if (usuarioIsEmailExists) {
            _validationContract.isTrue(
                (usuarioIsEmailExists.nome != undefined) &&
                (usuarioIsEmailExists._id != req.params._id),
                `O email: ${req.body.email} já existe.`
            )
        }
        ctrlBase.put(_repo, _validationContract, req, res)
    }

    async delete(req, res) {
        ctrlBase.delete(_repo, req, res)
    }

    async autenticar(req, res) {
        let _validationContract = new validation()

        _validationContract.isRequired(req.body.senha, 'Informe sua senha')
        _validationContract.isRequired(req.body.email, 'Informe seu email')
        _validationContract.isEmail(req.body.email, 'Email Inválido')

        if (_validationContract.isValid()) {
            res.status(400).send({
                message: `Não foi possível efetuar o login`,
                validation: _validationContract.errors()
            })
            return
        }
        let usuarioEncontrado = await _repo.authenticate(req.body.email, req.body.senha)

        if (usuarioEncontrado) {
            res.staus(200).send({
                usuario: usuarioEncontrado,
                token: jwt.sign({user: usuarioEncontrado}, variables.Security.secretkey)
            })
        } else {
            res.staus(404).send({message: 'Usuario e Senha informado são inválidos'})
        }
    }
}

module.exports = usuarioController