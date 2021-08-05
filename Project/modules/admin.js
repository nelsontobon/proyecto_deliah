const express = require('express');
const router = express.Router();


const {adminDetail} = require('../controllers/admin/adminDetail')
const {adminOrders} = require('../controllers/admin/adminOrders')
const {updateStatus} = require('../controllers/admin/updateStatus')

router.get("/order",adminDetail);
router.get("/",adminOrders);
router.put("/status",updateStatus);

module.exports = router