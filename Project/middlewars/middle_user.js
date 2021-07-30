const rateLimit = require('express-rate-limit');
const response = require('../utils/response.js')
const sequelize = require('../utils/dbConnection.js');
const {selUserUsername, selUserId} = require('../model/db_user')

exports.limiterSingUp = rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutos
    max: 3,
    message: "Se supero el limite de 3 peticiones por hora"
});

// MODULAR
exports.validateUser = async (req, res, next) => {
    let {username} = req.body;

    try{
        const users = await selUserUsername(username)

        console.log('holoa', users)
        // if (users.length > 0) {
        //     if (username == users[0].username) {
        //         res.status(401).send(
        //             new response(
        //                 'error',
        //                 '402',
        //                 'el usuario ya existe'
        //             )
        //         )
        //     } else {
        //         next()
        //     }
        // } else {
        //     next()
        // }

    }catch (err){
        console.log('err: ', err)
    }

    // selUserUsername(username).then( function (users) {
    //     console.log('holoa', users)
    //     if (users.length > 0) {
    //         if (username == users[0].username) {
    //             res.status(401).send(
    //                 new response(
    //                     'error',
    //                     '402',
    //                     'el usuario ya existe'
    //                 )
    //             )
    //         } else {
    //             next()
    //         }
    //     } else {
    //         next()
    //     }
    // })
}

exports.validateId = (req, res, next) => {

    let {id} = req.query;

    selUserId(id).then(function (users) {
        if (users.length > 0) {
            next()
        } else {
            res.status(401).send(
                new response(
                    'error',
                    '402',
                    `el usuario con el id:${id} no existe`
                )
            )
        }
    })
}


//ORIGINAL

// exports.validateUser = (req,res,next) =>{
//     let sql = 'SELECT * FROM delilah_resto.users where username = ?';
//     let {username} = req.body;

//     sequelize.query(sql, {
//         type: sequelize.QueryTypes.SELECT,
//         replacements: [username]
//     }).then(function (users) {
//             if (users.length > 0){
//                 if (username == users[0].username) {
//                     console.log('hola')
//                     res.status(401).send(
//                         new response(
//                             'error',
//                             '402',
//                             'el usuario ya existe'
//                         )
//                     )
//                 }else{
//                     next()
//                 }
//             }else{
//                 next()
//             }      
//         })
// } 

// exports.validateId = (req,res,next) =>{
//     let sql = 'SELECT * FROM delilah_resto.users where id_user = ?';
//     let {id} = req.query;

//     sequelize.query(sql, {
//         type: sequelize.QueryTypes.SELECT,
//         replacements: [id]
//     }).then(function (users) {
//             if (users.length > 0){
//                 next()
//             }else{
//                 res.status(401).send(
//                     new response(
//                         'error',
//                         '402',
//                         `el usuario con el id:${id} no existe`
//                     )
//                 )
//             }      
//         })
// } 