/**
 * creacion de los endpoint para la entidad plates
 */
const express = require('express');
const router = express.Router();
const {validateRol} = require('../middlewars/user/validateRol')
const {validateIdParam} = require('../middlewars/validateIdParam')
const {validateNewPlate} = require('../middlewars/plates/validateNewPlate')
const {validateUpdatePlate} = require('../middlewars/plates/validateUpdatePlate')

const {selPlates} = require('../controllers/plates/selPlates')
const {createPlate} = require('../controllers/plates/createPlate')
const {selPlateId} = require('../controllers/plates/selPlateId')
const {updatePlate} = require('../controllers/plates/updatePlate')
const {deletePlate} = require('../controllers/plates/deletePlate')

router.get("/allplates/", selPlates)
router.get("/", validateIdParam, selPlateId)
router.post("/", validateRol, validateNewPlate, createPlate)
router.put("/", validateRol, validateIdParam, validateUpdatePlate, updatePlate)
router.delete("/", validateRol, validateIdParam, deletePlate)


module.exports = router