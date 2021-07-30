const express = require('express');
const router = express.Router();

const response = require('../utils/response.js')
const sequelize = require('../utils/dbConnection.js');

const jwt = require('jsonwebtoken');
const middle = require('../middlewars/middle_user.js')

const {
    selLogin,
    insertUser,
    sellLastUser,
    selUserUsername,
    selUserId,
    updateUser
} = require('../model/db_user')

const JWTCLAVE = "Ac4m1c4_2021!";

router.post("/login", middle.limiterSingUp, function (req, res) {

    let sql = 'SELECT * FROM delilah_resto.users where username = ? and password = ?';
    let {username,password} = req.body;

    sequelize.query(sql, {
            type: sequelize.QueryTypes.SELECT,
            replacements: [username, password]
        }).then(function (users) {
            if (users.length > 0){
                if (username == users[0].username || password == users[0].password) {
                    const token = jwt.sign({
                            usuario: username,
                            password: password
                        },
                        JWTCLAVE, {
                            expiresIn: '1h'
                        }, {
                            algorithm: 'RS256'
                        }
                    );
                    
                    data = users[0]
                    data.api_key = token
                    delete data.password

                    res.status(200).send(
                        new response(
                            'ok',
                            '200',
                            'usuario logueado correctamente',
                            data
                        )
                    );

                } 
            }else {
                res.status(401).send(
                    new response(
                        'error',
                        '402',
                        'usuario incorrecto'
                    )
                )
            }
        }).catch(
            (err) => {
                console.error('Error de conexion:', err);
            }
        )
});

router.post("/singUp", middle.validateUser, function (req, res) {
    console.log(req.body)
    let sql = 'insert into delilah_resto.users (name, lastname, email, phone, address, username, password) values (?,?,?,?,?,?,?)';
    let {
        name,
        lastname,
        email,
        phone,
        address,
        username,
        password
    } = req.body;

    sequelize.query(sql, {
            type: sequelize.QueryTypes.INSERT,
            replacements: [name, lastname, email, phone, address, username, password]
        })
        .then(function () {
            sequelize.query('SELECT * FROM delilah_resto.users WHERE id_user = (SELECT LAST_INSERT_ID());', {
                    type: sequelize.QueryTypes.SELECT
                })
                .then(function (user) {
                    data = user[0]
                    delete data.password

                    res.status(200).send(
                        new response(
                            'ok',
                            '200',
                            'usuario registrado correctamente',
                            data
                        )
                    )
                }).catch((err) => {
                        console.error('Error de conexion:', err);
                })
        }).catch((err) => {
                res.status(400).send('Error de conexion:', err)
        })
})

router.delete("/", middle.validateId,function (req, res) {
    let { id } = req.query
    sequelize.query('DELETE FROM delilah_resto.users WHERE id_user = ?;', {
            type: sequelize.QueryTypes.DELETE,
            replacements: [id]
    }).then(function () {
        res.status(200).send(
            new response(
                'ok',
                '200',
                'usuario eliminado correctamente'
            )
        )
    }).catch((err) => {
            console.error('Error de conexion:', err);
            res.status(400).send(
                new response(
                    'error',
                    '400',
                    'ha ocurrido un error al eliminar el usuario'
                )
            )
    })
})

router.put("/", middle.validateId,function (req, res) {
    let { id } = req.query
    let body = req.body
    let fields = []

    for (let key in body){
        fields.push(`${key}='${body[key]}'`)
    }

    sequelize.query(`UPDATE delilah_resto.users SET ${fields} where id_user = ?`, {
            type: sequelize.QueryTypes.put,
            replacements: [id]
    }).then(function () {
        sequelize.query('SELECT * FROM delilah_resto.users WHERE id_user = ?;', {
            type: sequelize.QueryTypes.SELECT,
            replacements: [id]
        }).then(function (user) {
            data = user[0]
            delete data.password

            res.status(200).send(
                new response(
                    'ok',
                    '200',
                    'usuario actulizado correctamente',
                    data
                )
            )
        }).catch((err) => {
                console.error('Error de conexion:', err);
        })
    }).catch((err) => {
            console.error('Error de conexion:', err);
            res.status(400).send(
                new response(
                    'error',
                    '400',
                    'ha ocurrido un error al actualizar el usuario'
                )
            )
    })
})


module.exports = router