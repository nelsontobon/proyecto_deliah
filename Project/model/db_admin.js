/**
 * modelos de base de datos para la entidad admin
 */
const sequelize = require('../config/dbConnection.js');

// Seleccionar la informacion de una orden por id
const selAdminOrderId = (id) => {
    return sequelize.query(`SELECT a.id_event,a.id_user,a.id_payment,a.id_status,b.id_plate ,d.description,c.price,b.quantity,c.name,e.method,a.address,f.name,f.lastname,f.email,f.username,f.phone,a.event_hour
        FROM delilah_resto.orders_events as a 
        INNER JOIN delilah_resto.order_plates AS b ON a.id_event = b.id_event 
        INNER JOIN delilah_resto.plates AS c ON b.id_plate = c.id_plate 
        INNER JOIN delilah_resto.status AS d ON a.id_status = d.id_status 
        INNER JOIN delilah_resto.payment_method AS e ON a.id_payment = e.id_payment 
        INNER JOIN delilah_resto.users AS f ON a.id_user = f.id_user
        WHERE a.id_event = ?;
        `, {
            type: sequelize.QueryTypes.SELECT,
            replacements: [id]
        })
}

// Seleccionar la informacion de todas las ordenes
const selAdminOrders = () => {
    return sequelize.query(`SELECT a.id_event,a.id_user,a.id_payment,a.id_status,b.id_plate ,d.description,group_concat(b.quantity, 'x', c.name) as plates,sum(b.quantity * c.price) as price,e.method,concat(f.name, ' ', f.lastname) as fullname,a.address,a.event_hour
        FROM delilah_resto.orders_events as a 
        INNER JOIN delilah_resto.order_plates AS b ON a.id_event = b.id_event 
        INNER JOIN delilah_resto.plates AS c ON b.id_plate = c.id_plate 
        INNER JOIN delilah_resto.status AS d ON a.id_status = d.id_status 
        INNER JOIN delilah_resto.payment_method AS e ON a.id_payment = e.id_payment 
        INNER JOIN delilah_resto.users AS f ON a.id_user = f.id_user
        where a.is_active = 1
        group by id_event;
        `, {
            type: sequelize.QueryTypes.SELECT
        })
}

// Actualizar estado de una orden
const updateStatusOrder = (id, new_status) => {
    return sequelize.query('UPDATE delilah_resto.orders_events SET id_status = ? WHERE id_event = ?', {
            type: sequelize.QueryTypes.UPDATE,
            replacements: [new_status, id]
        })
}

// Seleccionar el estado actualizado de la orden
const selNewOrderStatus = (id) => {
    return sequelize.query( `
        SELECT a.id_event,a.id_user,a.id_payment,a.id_status,b.description,a.event_hour
        FROM delilah_resto.orders_events as a
        INNER JOIN delilah_resto.status AS b ON a.id_status = b.id_status 
        where a.id_event = ?;
        `, {
                type: sequelize.QueryTypes.SELECT,
                replacements: [id]
            })
}

// Seleccionar el estado por id
const selStatusId = (id) => {
    return sequelize.query('SELECT id_status, description FROM delilah_resto.status WHERE id_status = ?;', {
            type: sequelize.QueryTypes.SELECT,
            replacements: [id]
        })
}



module.exports = {
    selAdminOrderId,
    selAdminOrders,
    updateStatusOrder,
    selNewOrderStatus,
    selStatusId
}

