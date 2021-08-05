const express = require('express');
const router = express.Router();

const middle = require('../middlewars/middle_user.js')

const {loginUser} = require('../controllers/user/loginUser')
const {singUpUser} = require('../controllers/user/singUpUser')
const {deleteUser} = require('../controllers/user/deleteUser')
const {updateUser} = require('../controllers/user/updateUser')



router.post("/login", middle.limiterSingUp, loginUser);

router.post("/singUp", middle.validateUser, singUpUser)

router.delete("/", middle.validateId, deleteUser)

router.put("/", middle.validateId,updateUser)


module.exports = router