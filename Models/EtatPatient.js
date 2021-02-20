const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EtatPatient = new Schema({
  temprature  : {
     type : String
   },
   SPo2 : {
     type: String
    },
   bpm : {
    type: String
   },
   date  :{ type: Date, default: Date.now() },
   Patient : { type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' }
},{
  collection: 'etatPatient'
});

module.exports = mongoose.model('EtatPatient', EtatPatient);