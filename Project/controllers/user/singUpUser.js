const response = require('../../utils/response.js')

const {
    insertUser,
    sellLastUser
} = require('../../model/db_user')


const singUpUser = (req, res) => {
    let {
        name,
        lastname,
        email,
        phone,
        address,
        username,
        password
    } = req.body;

    insertUser([name, lastname, email, phone, address, username, password]).then( () => {
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
                        console.error('Error de conexion:', err);
                })
        }).catch((err) => {
                res.status(400).send('Error de conexion:', err)
        })
}

module.exports = {singUpUser}