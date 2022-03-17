const express = require('express');
const router = express.Router();


const FranquiasController = require("../controllers/controler.js")


router.post('/registrar', FranquiasController.create)

router.get('/', FranquiasController.showAll)

router.get('/:id', FranquiasController.showById)

router.delete('/:id', FranquiasController.deleteById)

router.patch('/:id', FranquiasController.updateById)

module.exports = router;