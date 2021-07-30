const user = require('../modules/user.js')

// module.exports = user
module.exports = function (app) {
    app.use('/user',user)
}