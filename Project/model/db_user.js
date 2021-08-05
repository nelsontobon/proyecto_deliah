const sequelize = require('../utils/dbConnection.js');

const selLogin = (user) => {
    return sequelize.query('SELECT * FROM delilah_resto.users where username = ? and password = ?;', {
        type: sequelize.QueryTypes.SELECT,
        replacements: user
    })
}

const insertUser = (user) => {
    return sequelize.query('insert into delilah_resto.users (name, lastname, email, phone, address, username, password) values (?,?,?,?,?,?,?)', {
            type: sequelize.QueryTypes.INSERT,
            replacements: user
        })
}

const sellLastUser = () =>{
    return sequelize.query('SELECT * FROM delilah_resto.users WHERE id_user = (SELECT LAST_INSERT_ID());', {
        type: sequelize.QueryTypes.SELECT
    })
}
const selUserUsername = ( username ) => {
    return sequelize.query('SELECT * FROM delilah_resto.users where username = ?', {
        type: sequelize.QueryTypes.SELECT,
        replacements: [username]
    })
}

const selUserId = ( id ) => {
    return sequelize.query('SELECT * FROM delilah_resto.users where id_user = ?;', {
            type: sequelize.QueryTypes.SELECT,
            replacements: [id]
    })
}

const deleteUserId = ( id ) => {
    return sequelize.query('DELETE FROM delilah_resto.users WHERE id_user = ?;', {
            type: sequelize.QueryTypes.DELETE,
            replacements: [id]
    })
}

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