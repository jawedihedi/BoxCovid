const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Suivie = new Schema({
  date  : {
     type : Date
   },
  Medicin : { type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' },
  Patient : { type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' }
},{
  collection: 'suivie'
});

module.exports = mongoose.model('Suivie', Suivie);