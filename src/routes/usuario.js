const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const router = express.Router();

/* GET home page. */
router.post('/', usuarioController.criar);


module.exports = router;
