/**
 * Obtener las variables de entorno
 */
require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 3000,
    DATABASE : process.env.DATABASE || {},
    TOKENPASSWORD: process.env.TOKENPASSWORD
}