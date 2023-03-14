let express = require('express');
let app = express.Router();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let User = require('../model/user');
let checkToken = require('../utils/CheckToken');
const expressJwt = require('express-jwt');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let config = require('../config');

const checkIfAuthenticated = expressJwt.expressjwt({
    secret: config.public,
    algorithms: ['RS256']
})


exports.register = (req, res) => {
    User.findOne({
        email: req.body.email
    },
        (err, user) => {
            if (err) {
                return res.status(500).send('Error on the server');
            }
            if (!user) {
                return res.status(404).send('No user found');
            }
            else {
                let hashedPassword = bcrypt.hashSync(req.body.password, 8);
                User.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: hashedPassword,
                    assignements: []
                },
                    (err, user) => {
                        console.log('user =>', user)
                        if (err) {
                            return res.status(500).send("There was a problem registering the user");
                        }
                        let token = jwt.sign({ id: user._id }, config.secret, {
                            expiresIn: 86400 // expires in 24 hours
                        });
                        res.status(200).send({ auth: true, token: token });
                    });
            }
        });
};


exports.getProfile = (req, res) => {
    let token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token providerd.' });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authentificate' });
        }
        req.userId = decoded.id;
        next();
    });
}

exports.login = (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) {
            return res.status(500).send('Error on the server');
        }
        if (!user) {
            return res.status(404).send('No user found');
        }
        //check if password is valid
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({ auth: false, token: null });
        }
        let token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    });
};

exports.logout = (req, res) => {
    res.status(200).send({ auth: false, token: null });
};
