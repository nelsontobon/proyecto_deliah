/**
 * creacion de los endpoint para la entidad admin
 */

const express = require('express');
const router = express.Router();
const {validateRol} = require('../middlewars/user/validateRol')
const {validateIdParam} = require('../middlewars/validateIdParam')
const {validateStatus} = require('../middlewars/admin/validateStatus')

const {adminDetail} = require('../controllers/admin/adminDetail')
const {adminOrders} = require('../controllers/admin/adminOrders')
const {updateStatus} = require('../controllers/admin/updateStatus')

router.use(validateRol)
router.get("/order", validateIdParam, adminDetail);
router.get("/",adminOrders);
router.put("/status", validateIdParam, validateStatus, updateStatus);

module.exports = router