/**
 * Controlador para crear un usuario
 */
const response = require('../../config/response.js')

const {
    insertUser,
    sellLastUser
} = require('../../model/db_user')

const singUpUser = async (req, res) => {
    let {
        name,
        lastname,
        email,
        phone,
        address,
        username,
        password,
        admin
    } = req.body;

    insertUser([name, lastname, email, phone, address, username, password,admin]).then(() => {
            sellLastUser().then(function (user) {
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
                    res.status(500).send(
                        new response(
                            'error',
                            '500',
                            'error al insertar el usuario',
                        )
                    )
                })
        }).catch((err) => {
            res.status(500).send(
                new response(
                    'error',
                    '500',
                    'error al insertar el usuario',
                )
            )
        })
}

module.exports = {singUpUser}