const express = require('express');
const helmet = require('helmet');
const response = require('../config/response.js')
const rateLimit = require('express-rate-limit');
const expressJwt = require('express-jwt');
const config = require('../config/config');

//------------- MIDDLEWARS --------------------------------

// Limita el numero de peticiones por hora
let limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutos
    max: 20,
    message: "Se supero el limite de 20 peticiones por hora"
});

module.exports = function (app) {
    app.use(helmet());
    app.use(express.static('publica'));
    app.use(express.json());

    app.disable('x-powered-by');

    // Limitar el tamaño de los archivos
    app.use(express.json({
        limit: '100kb'
    }));
    app.use(limiter);

    // Seguridad por token
    app.use(expressJwt({
        secret: config.TOKENPASSWORD,
        algorithms: ['sha1', 'RS256', 'HS256']
    }).unless({
        path: ["/user/login", "/user/singUp"]
    }));

    // Verificacion del token
    app.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            res.status(401).send(
                new response(
                    'error',
                    '401',
                    'Token invalido'
                )
            )
        }
        next()
    });

}