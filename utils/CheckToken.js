let config = require('../config');
let jwt = require('jsonwebtoken');

// Check if the token is valid
exports.CheckToken = (req, res, next) => {
    let token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authentificate' });
        }
        req.userId = decoded.id;
        next();
    });
}