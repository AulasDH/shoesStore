const express = require('express');
const sapatoController = require('../controllers/sapatoController');

const router = express.Router();

router.post('/', sapatoController.criar);
router.get('/cadastro', sapatoController.index);


module.exports = router;
