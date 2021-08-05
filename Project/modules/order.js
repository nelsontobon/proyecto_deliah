const express = require('express');
const router = express.Router();

const {createOrder} = require('../controllers/order/createOrder')
const {selOrderHis} = require('../controllers/order/selOrderHis')

router.post("/neworder",  createOrder);
router.get("/history",  selOrderHis);

module.exports = router