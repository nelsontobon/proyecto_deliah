/**
 * Generar la conexion con la base de datos
 */
const config = require('./config');
const Sequelize = require('sequelize');

const database = JSON.parse(config.DATABASE)

const sequelize = new Sequelize(database.DB, database.USER, database.PASSWORD, {
    host: database.HOST,
    dialect: 'mysql',
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
