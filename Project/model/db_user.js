/**
 * modelos de base de datos para la entidad user
 */
const sequelize = require('../config/dbConnection.js');

// Selecciona el usuario por username y contraseña
const selLogin = (user) => {
    return sequelize.query('SELECT * FROM delilah_resto.users where username = ? and password = ?;', {
        type: sequelize.QueryTypes.SELECT,
        replacements: user
    })
}

// Insertar un nuevo usuario
const insertUser = (user) => {
    return sequelize.query('insert into delilah_resto.users (name, lastname, email, phone, address, username, password, admin) values (?,?,?,?,?,?,?,?)', {
            type: sequelize.QueryTypes.INSERT,
            replacements: user
        })
}

// Seleccionar el ultimo usuario creado
const sellLastUser = () =>{
    return sequelize.query('SELECT * FROM delilah_resto.users WHERE id_user = (SELECT LAST_INSERT_ID());', {
        type: sequelize.QueryTypes.SELECT
    })
}

// Seleccionar usuario el por username
const selUserUsername = ( username ) => {
    return sequelize.query('SELECT * FROM delilah_resto.users where username = ?', {
        type: sequelize.QueryTypes.SELECT,
        replacements: [username]
    })
}

// Seleccionar usuario el por id
const selUserId = ( id ) => {
    return sequelize.query('SELECT * FROM delilah_resto.users where id_user = ?;', {
            type: sequelize.QueryTypes.SELECT,
            replacements: [id]
    })
}

// Borrar usuario por id
const deleteUserId = ( id ) => {
    return sequelize.query('DELETE FROM delilah_resto.users WHERE id_user = ?;', {
            type: sequelize.QueryTypes.DELETE,
            replacements: [id]
    })
}

// Actualizar informacion del usuario
const updateUserId =  (id, fields) => {
    return sequelize.query(`UPDATE delilah_resto.users SET ${fields} where id_user = ?`, {
        type: sequelize.QueryTypes.put,
        replacements: [id]
    })
}

module.exports = {
    selLogin,
    insertUser,
    sellLastUser,
    selUserUsername,
    selUserId,
    deleteUserId,
    updateUserId
}