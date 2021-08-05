const response = require('../../utils/response.js')

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
}

module.exports = {updateUser}