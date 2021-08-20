/**
 * creacion de los endpoint para la entidad user
 */
const express = require('express');
const router = express.Router();

const {limiterSingUp} = require('../middlewars/user/limiterSingUp')
const {validateUser} = require('../middlewars/user/validateUser')
const {validateId} = require('../middlewars/user/validateId')
const {validateUserAccess} = require('../middlewars/user/validateUserAccess')
const {validateInfoNewUser} = require('../middlewars/user/validateInfoNewUser')

const {loginUser} = require('../controllers/user/loginUser')
const {singUpUser} = require('../controllers/user/singUpUser')
const {deleteUser} = require('../controllers/user/deleteUser')
const {updateUser} = require('../controllers/user/updateUser')


router.post("/login", limiterSingUp, loginUser)

router.post("/singUp",  validateInfoNewUser, validateUser,  singUpUser)

router.delete("/", validateUserAccess, validateId,  deleteUser)

router.put("/", validateUserAccess, validateId,  updateUser)


module.exports = router