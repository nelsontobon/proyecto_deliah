const {database} = require('./keys.js');
const Sequelize = require('sequelize');


const sequelize = new Sequelize(database.DB, database.USER, database.PASSWORD, {
    host: database.HOST,
    dialect: database.dialect,
    operatorsAliases: 0,
    port: database.PORT,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


sequelize.authenticate().then(() => {
    console.log('Conectado.');
}).catch(err => {
    console.error('Error de conexion:', err);
})


module.exports = sequelize;