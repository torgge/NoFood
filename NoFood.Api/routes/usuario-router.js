"use strict";

const express = require("express")
const router = express.Router()
const controller = require('../controllers/usuario-controller')
const auth = require('../middlewares/authentication')

let _controller = new controller()

router.get("/autenticar", _controller.autenticar)
router.get("/", auth, _controller.get)
router.get("/:id", auth, _controller.getById)
router.post("/", _controller.post)
router.put("/:id", auth, _controller.put)
router.delete("/:id", auth, _controller.delete)

module.exports = router