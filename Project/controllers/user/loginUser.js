/**
 * Controlador para loguear un usuario
 */
const {selLogin} = require('../../model/db_user')
const response = require('../../config/response')
const {getToken} = require('./getToken')

const loginUser =  (req, res) => {

    let {
        username,
        password
    } = req.body;

    selLogin([username,password]).then(function (users) {
        if (users.length > 0) {
            if (username == users[0].username || password == users[0].password) {
                const token = getToken(users[0].id_user, users[0].username, users[0].admin)

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
        } else {
            throw 'Error'
        }
    }).catch((err) => {
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al registrar el usuario'
            )
        )
    })
}

module.exports = {loginUser}