let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const { jwt_secret } = require('./config');
const { config } = require('dotenv');
mongoose.Promise = global.Promise;
const uri = "mongodb+srv://Adembj:zvNT2hC6JewvF7Qv@m1miage.0nzctg4.mongodb.net/assignments"

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connecté à la base de données");
  },
    err => {
      console.log("Erreur de connexion à la base de données", err);
    });

// CORS headers
const headers = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
}

app.use(headers);

// form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
require("./routes/subject.js")(app);
require("./routes/assignments")(app);
require("./routes/user")(app);

let port = process.env.PORT || 8010;


app.listen(port, "0.0.0.0");
console.log('server started on http://localhost:' + port);

module.exports = app;


