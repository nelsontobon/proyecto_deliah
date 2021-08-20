/**
 * modelos de base de datos para la entidad plate
 */
const sequelize = require('../config/dbConnection.js');

// Selecciona todos los platos
const selAllPlates = () => {
    return sequelize.query('SELECT * FROM delilah_resto.plates;', {
        type: sequelize.QueryTypes.SELECT,
    })
}

// selecciona el plato por el id
const selPlateById = ( id ) => {
    return sequelize.query('SELECT * FROM delilah_resto.plates where id_plate = ?;', {
            type: sequelize.QueryTypes.SELECT,
            replacements: [id]
    })
}

// Inserta un nuevo plato
const insertPlate = (plate) => {
    return sequelize.query('INSERT INTO delilah_resto.plates (name, description, price, category) values (?,?,?,?);', {
        type: sequelize.QueryTypes.INSERT,
        replacements: plate
    })
}

// Actualizar informacion del plato
const updatePlateId =  (id, fields) => {
    return sequelize.query(`UPDATE delilah_resto.plates SET ${fields} where id_plate = ?`, {
        type: sequelize.QueryTypes.put,
        replacements: [id]
    })
}

// Borrar el plato
const deletePlateId = ( id ) => {
    return sequelize.query('DELETE FROM delilah_resto.plates WHERE id_plate = ?;', {
            type: sequelize.QueryTypes.DELETE,
            replacements: [id]
    })
}

// Seleccionar el ultimo plato
const sellLastUser = () =>{
    return sequelize.query('SELECT * FROM delilah_resto.plates WHERE id_plate = (SELECT LAST_INSERT_ID());', {
        type: sequelize.QueryTypes.SELECT
    })
}

module.exports = {
    selAllPlates,
    selPlateById,
    insertPlate,
    updatePlateId,
    deletePlateId,
    sellLastUser
}