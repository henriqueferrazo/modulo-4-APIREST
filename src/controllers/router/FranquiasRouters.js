const express = require('express');
const router = express.Router();


const FranquiasController = require("../controllers/controler.js")


router.post('/create', FranquiasController.create)

router.get('/', FranquiasController.showAll)
router.get('/:id', FranquiasController.showById)

module.exports = router;