let config = require('../config');
let jwt = require('jsonwebtoken');

// Check if the token is valid
exports.CheckToken = (req, res, next) => {
    console.log("CheckToken in progress");
    let token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'Token missing' });
    }
    jwt.verify(token, config.secret, function(err, decoded) {
        if(err){
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
        }
        req.userId = decoded.id;
        next();
      });
    }