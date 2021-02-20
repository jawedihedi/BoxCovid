require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


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
