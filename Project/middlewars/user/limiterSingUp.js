// Limitar el numero de peticiones al endpoint de login
const rateLimit = require('express-rate-limit');

exports.limiterSingUp = rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutos
    max: 3,
    message: "Se supero el limite de 3 peticiones por hora"
});