/**
 * creacion de los endpoint para la entidad order
 */
const express = require('express');
const router = express.Router();

const {createOrder} = require('../controllers/order/createOrder')
const {selOrderHis} = require('../controllers/order/selOrderHis')
const {unableOrder} = require('../controllers/order/unableOrder')
const {validateIdParam} = require('../middlewars/validateIdParam')

router.post("/neworder",  createOrder);
router.get("/history",  validateIdParam, selOrderHis);
router.put("/unable",  validateIdParam, unableOrder);


module.exports = router