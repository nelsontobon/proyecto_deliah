/**
 * modelos de base de datos para la entidad order
 */
const sequelize = require('../config/dbConnection.js');

// Selecciona la orden por el id para usuarios no administradores
const selOrderId = (id) => {
    return sequelize.query(`SELECT a.id_event,a.id_user,a.id_payment,a.id_status,b.id_plate ,a.address,c.price,b.quantity,c.price,c.name,e.method,a.event_hour
        FROM delilah_resto.orders_events as a 
        INNER JOIN delilah_resto.order_plates AS b ON a.id_event = b.id_event 
        INNER JOIN delilah_resto.plates AS c ON b.id_plate = c.id_plate 
        INNER JOIN delilah_resto.status AS d ON a.id_status = d.id_status 
        INNER JOIN delilah_resto.payment_method AS e ON a.id_payment = e.id_payment 
        WHERE a.id_event = ?;`, {
        type: sequelize.QueryTypes.SELECT,
        replacements: [id]
    })
}

// Selecciona la ultima orden creada
const selLastOrder = () => {
    return sequelize.query('SELECT * FROM delilah_resto.orders_events WHERE id_event = (SELECT LAST_INSERT_ID());', {
        type: sequelize.QueryTypes.SELECT,
    })
}

// Inserta una nueva orden
const insertOrder = (order) => {
    return sequelize.query('INSERT INTO delilah_resto.orders_events (id_user,id_payment,id_status,address, event_hour, is_active) VALUES (?,?,?,?,NOW(),1);', {
        type: sequelize.QueryTypes.INSERT,
        replacements: order
    })
}

// Inserta los platos relacionados a una orden
const insertOrderPlate = (orderPlate) => {
    return sequelize.query(`INSERT INTO delilah_resto.order_plates (id_event,id_plate,quantity) VALUES ${orderPlate};`, {
        type: sequelize.QueryTypes.INSERT,
    })
}

const updateIsActiveOrder = (id, new_status) => {
    return sequelize.query('UPDATE delilah_resto.orders_events SET is_active = ? WHERE id_event = ?', {
            type: sequelize.QueryTypes.UPDATE,
            replacements: [new_status, id]
        })
}


module.exports = {
    selOrderId,
    selLastOrder,
    insertOrder,
    insertOrderPlate,
    updateIsActiveOrder
}