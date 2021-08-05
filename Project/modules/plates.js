const express = require('express');
const router = express.Router();


const {selPlates} = require('../controllers/plates/selPlates')
const {createPlate} = require('../controllers/plates/createPlate')
const {selPlateId} = require('../controllers/plates/selPlateId')
const {updatePlate} = require('../controllers/plates/updatePlate')
const {deletePlate} = require('../controllers/plates/deletePlate')

router.get("/allplates/", selPlates)
router.get("/", selPlateId)
router.post("/", createPlate)
router.put("/", updatePlate)
router.delete("/", deletePlate)


module.exports = router