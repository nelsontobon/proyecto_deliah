const sequelize = require('../utils/dbConnection.js');

const selAllPlates = () => {
    return sequelize.query('SELECT * FROM delilah_resto.plates;', {
        type: sequelize.QueryTypes.SELECT,
    })
}

const selPlateById = ( id ) => {
    return sequelize.query('SELECT * FROM delilah_resto.plates where id_plate = ?;', {
            type: sequelize.QueryTypes.SELECT,
            replacements: [id]
    })
}

const insertPlate = (plate) => {
    return sequelize.query('INSERT INTO delilah_resto.plates (name, description, price, category) values (?,?,?,?);', {
        type: sequelize.QueryTypes.INSERT,
        replacements: plate
    })
}

const updatePlateId =  (id, fields) => {
    return sequelize.query(`UPDATE delilah_resto.plates SET ${fields} where id_plate = ?`, {
        type: sequelize.QueryTypes.put,
        replacements: [id]
    })
}

const deletePlateId = ( id ) => {
    return sequelize.query('DELETE FROM delilah_resto.plates WHERE id_plate = ?;', {
            type: sequelize.QueryTypes.DELETE,
            replacements: [id]
    })
}

module.exports = {
    selAllPlates,
    selPlateById,
    insertPlate,
    updatePlateId,
    deletePlateId
}