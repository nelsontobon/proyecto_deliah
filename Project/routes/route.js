const user = require('../modules/user')
const plates = require('../modules/plates')
const orders = require('../modules/order')
const admin = require('../modules/admin')

module.exports = function (app) {
    app.use('/user',user)
    app.use('/plates',plates)
    app.use('/order',orders)
    app.use('/admin',admin)
}