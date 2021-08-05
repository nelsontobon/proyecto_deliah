const config = require('./utils/config');
const express = require('express');
const routes = require('./routes/route.js')
const middle = require('./middlewars/middle_globals')

const app = express();
//------------CONSTANTES-----------------------------------
const PORT = 3000;

//--------------------------------------------------------------------------------------------
middle(app)
routes(app)
//--------------------------------------------------------------------------------------------
app.listen(config.PORT, () => {
    console.log("El servidor esta escuchando en el puerto " + PORT);
})