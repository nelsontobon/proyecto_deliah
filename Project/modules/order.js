/**
 * creacion de los endpoint para la entidad order
 */
const express = require('express');
const router = express.Router();

const {createOrder} = require('../controllers/order/createOrder')
const {selOrderHis} = require('../controllers/order/selOrderHis')
const {validateIdParam} = require('../middlewars/validateIdParam')

router.post("/neworder",  createOrder);
router.get("/history",  validateIdParam, selOrderHis);

module.exports = router