const user = require('../modules/user')
const plates = require('../modules/plates')
const orders = require('../modules/order')


module.exports = function (app) {
    app.use('/user',user)
    app.use('/plates',plates)
    app.use('/order',orders)
}