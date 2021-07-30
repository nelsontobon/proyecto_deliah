const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const expressJwt = require('express-jwt');


const app = express();

//------------CONSTANTES-----------------------------------
const PORT = 3000;
const JWTCLAVE = "Ac4m1c4_2021!";

//------------- MIDDLEWARS --------------------------------
let limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutos
    max: 20,
    message: "Se supero el limite de 20 peticiones por hora"
});


app.use(helmet());
app.use(express.static('publica'));
app.use(express.json());

app.disable('x-powered-by');
app.use(express.json({limit: '100kb'}));
app.use(limiter);

app.use(expressJwt({
        secret: JWTCLAVE,
        algorithms: ['sha1', 'RS256', 'HS256']   
    }).unless({
        path: ["/user/login", "/user/singUp"]
}));

//--------------------------------------------------------------------------------------------
const routes = require('./routes/route.js')
routes(app)
// app.use('/', routes)

//--------------------------------------------------------------------------------------------

app.listen(PORT, () => {
    console.log("El servidor esta escuchando en el puerto " + PORT);
})