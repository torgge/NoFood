"use strict";

const express = require("express")
const router = express.Router()

const controller = require('../controllers/produto-controller')

let _controller = new controller()

router.get("/", _controller.get)
router.get("/:id", _controller.getById)
router.post("/", _controller.post)
router.put("/:id", _controller.put)
router.delete("/:id", _controller.delete)

module.exports = router
