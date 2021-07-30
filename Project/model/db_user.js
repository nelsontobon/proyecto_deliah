const sequelize = require('../utils/dbConnection.js');

const selLogin = async (user) => {
    sequelize.query('SELECT * FROM delilah_resto.users where username = ? and password = ?', {
        type: sequelize.QueryTypes.SELECT,
        replacements: user
    })
}

const insertUser = async (user) => {
    sequelize.query('insert into delilah_resto.users (name, lastname, email, phone, address, username, password) values (?,?,?,?,?,?,?)', {
            type: sequelize.QueryTypes.INSERT,
            replacements: user
        })
}

const sellLastUser = async () =>{
    sequelize.query('SELECT * FROM delilah_resto.users WHERE id_user = (SELECT LAST_INSERT_ID());', {
        type: sequelize.QueryTypes.SELECT
    })
}

const selUserUsername =  ( username ) => {
    sequelize.query('SELECT * FROM delilah_resto.users where username = ?', {
        type: sequelize.QueryTypes.SELECT,
        replacements: [username]
    })
}

const selUserId = async ( id ) => {
    sequelize.query('DELETE FROM delilah_resto.users WHERE id_user = ?;', {
            type: sequelize.QueryTypes.DELETE,
            replacements: [id]
    })
}

const updateUser = async (id, fields) => {
    sequelize.query(`UPDATE delilah_resto.users SET ${fields} where id_user = ?`, {
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
    updateUser
}