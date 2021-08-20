/**
 * Controlador para actualizar la informacion de un usuario
 */
const response = require('../../config/response.js')

const {
    updateUserId,
    selUserId
} = require('../../model/db_user')

const updateUser = (req, res) => {
    let {
        id
    } = req.query

    let body = req.body
    let fields = []

    for (let key in body) {
        fields.push(`${key}='${body[key]}'`)
    }

    updateUserId(id, fields).then(function () {
        selUserId(id).then(function (user) {
            data = user[0]
            delete data.password

            res.status(200).send(
                new response(
                    'ok',
                    '200',
                    'usuario actualizado correctamente',
                    data
                )
            )
        }).catch((err) => {
            res.status(500).send(
                new response(
                    'error',
                    '500',
                    'ha ocurrido un error al actualizar el usuario'
                )
            )
        })
    }).catch((err) => {
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al actualizar el usuario'
            )
        )
    })
}

module.exports = {updateUser}