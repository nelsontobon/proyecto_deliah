/**
 * Controlador para generar un nuevo token
 */
const jwt = require('jsonwebtoken');

const JWTCLAVE = "Ac4m1c4_2021!";

const getToken = (id_user, username, admin) => {
    const token = jwt.sign({
            id: id_user,
            username: username,
            admin: admin
        },
        JWTCLAVE, {
            expiresIn: '1h'
        }, {
            algorithm: 'RS256'
        }
    )

    return token
}

module.exports = {getToken}