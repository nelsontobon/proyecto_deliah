const {selLogin} = require('../../model/db_user')
const response = require('../../utils/response')
const jwt = require('jsonwebtoken');

const JWTCLAVE = "Ac4m1c4_2021!";

const loginUser = async (req, res) => {

    let {
        username,
        password
    } = req.body;

    selLogin([username,password]).then(function (users) {
        if (users.length > 0) {
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
        } else {
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
}

module.exports = {loginUser}