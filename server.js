require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require ('cors');

app.use(cors())

//create a cors middleware
app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });


mongoose.connect(process.env.db_url,{ useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connction db'))

app.use(express.json())

const rapportController = require('./controllers/rapportController')
app.use('/rap',rapportController);

const OrdonnanceController = require('./controllers/OrdonnanceController')
app.use('/Ordo',OrdonnanceController);

const etatPatientController = require('./controllers/etatPatientController')
app.use('/etatPatient',etatPatientController);


var UserController = require('./controllers/UserController');
app.use('/users', UserController);

var AuthController = require('./controllers/AuthController');
app.use('/api/auth', AuthController);

var medicamentController = require('./controllers/medicamentController');
app.use('/med', medicamentController);


app.listen(3000, () => console.log('server started'))
