"use strict"
/* -------------------------------------------------------
------------------------------------------------------- */

const Token = require('../models/token')
const jwt = require('jsonwebtoken');
module.exports = async (req, res, next) => {

    const auth = req.headers?.authorization // Token ...tokenKey...
    const tokenKey = auth ? auth.split(' ') : null // ['Token', '...tokenKey...']

    if (tokenKey) {

        if (tokenKey[0] == 'Token') {

            const tokenData = await Token.findOne({ token: tokenKey[1] }).populate('userId')
            req.user = tokenData ? tokenData.userId : false
        }
        else if (tokenKey[0] == 'Bearer'){
            // JWT AccessToken:
            // jwt.verify(accessToken,access_key,callBackFunc)
            jwt.verify(tokenKey[1], process.env.ACCESS_KEY, function(error,accessData){
                // if(accessData) {
                //     console.log('JWT Verification was succesful')
                //     req.user = accessData
                // }
                // else {
                //     console.log('JWT Verification was failed')
                //     req.user = false
                // }
                req.user = accessData ? accessData : false
            })
        }
    }
    next()
}