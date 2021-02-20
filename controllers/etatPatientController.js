const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mqtt = require('mqtt');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const VerifyToken = require('./VerifyToken');



const etatPatient = require('../Models/EtatPatient');
const EtatPatient = require('../Models/EtatPatient');

const TOPIC1 = "sensor/temp";

const TOPIC2 = "sensor/bpm";

const TOPIC3 = "sensor/spo";
var a;  
var b; 
var c;  

const BROKER_URL = "mqtt://192.168.1.11";

const options = {

    port: 1883,

    clientId: '',

    username: 'churo',

    password: 'ss'
};

const client = mqtt.connect(BROKER_URL, options);



client.on("connect", onConnected);

client.on("message", onMessageReceived);


function onConnected() {

    

client.subscribe(TOPIC1);

client.subscribe(TOPIC2);

client.subscribe(TOPIC3);

}

function onMessageReceived(topic, message) {

  if (topic == TOPIC1) {
    

a =message.toString();


//console.log("Temperature : "+a+ "C°");

}



if (topic == TOPIC2) {
    

b =message.toString();



//console.log("BPM : "+b);

}



if (topic == TOPIC3) {

        

c =message.toString();



//console.log("SPo2 : "+c+ "%");

}

}



router.route('/add').post(VerifyToken ,function (req, res) {
  client.on("connect", onConnected);
  function onConnected() {
    client.subscribe(TOPIC1);
    client.subscribe(TOPIC2);
    client.subscribe(TOPIC3);
    }
      var temp;
      var Spo2;
      var bpm;
      var cpt = 0;
      var now = Date.now();
      client.on("message" , function (topic, message) {
        if (topic == TOPIC1) {
          temp = message.toString();
          
          //console.log("Temperature : "+temp+ "C°");
        }
        if (topic == TOPIC2) {
          bpm =message.toString(); 
          //console.log("BPM : "+this.bpm);
        }
        if (topic == TOPIC3) {        
          Spo2 =message.toString();
          //console.log("SPo2 : "+this.Spo2+ "%");
        }
        cpt++;
        if(cpt == 10000){
        let etatPatient = new EtatPatient ({
          temprature: temp,
          SPo2: Spo2,
          bpm: bpm,
          Patient: req.userId
        });
        console.log(etatPatient);
        etatPatient.save()
          .then(etatPatient => {
            res.status(200).json({'etatpatient': 'etatPatient ajoutée avec succés'});
          })
          .catch(err => {
          res.status(400).send("problème d'ajout");
          });
        }
      });
 
});
router.get('/etatPatients', VerifyToken , function (req, res) {
  EtatPatient.find({Patient : req.userId}, function (err, users) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(users);
  });
});
module.exports = router;
