/**
 * Controlador para eleminar un usuario
 * Solo usuarios administradores
 */
const response = require('../../config/response.js')

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
            res.status(500).send(
                new response(
                    'error',
                    '500',
                    'ha ocurrido un error al eliminar el usuario'
                )
            )
    })
}

module.exports = {deleteUser}