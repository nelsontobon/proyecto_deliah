const config = require('./config/config');
const express = require('express');
const routes = require('./routes/route.js')
const middle = require('./middlewars/middle_globals')

const app = express();
//-----------------------------------------------------------
//middlewars globales
middle(app)
//-----------------------------------------------------------
routes(app)
//------------------------------------------------------------
// Levantar el servidor
app.listen(config.PORT, () => {
    console.log("El servidor esta escuchando en el puerto " + config.PORT);
})