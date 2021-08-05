const response = require('../../utils/response.js')

const {
    deleteUserId
} = require('../../model/db_user')


const deleteUser = (req, res) => {
    let { id } = req.query

    deleteUserId(id).then(function () {
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
}

module.exports = {deleteUser}