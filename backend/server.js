var express = require('express')
, bodyParser = require('body-parser')
, login = require('./login.js')
, logger = require('morgan')
, mongoose = require("mongoose")
, cors = require('cors')
, http = require('http');

mongoose.Promise = global.Promise;
const db = mongoose.connect("mongodb://localhost:27017/userdb");

const app = express();
app.use(cors());

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));


app.post("/user/register",login.signUp);
app.post("/user/login",login.signIn);
app.post("/user/error",login.error);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Server Ready On Port " + app.get('port'));
});
