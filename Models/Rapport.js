const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Rapport = new Schema({
  descpription  : {
     type : String
   },
  date  :{ type: Date, default: Date.now() },
  Medicin : { type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' },
  Patient : { type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' }
},{
  collection: 'rapport'
});

module.exports = mongoose.model('Rapport', Rapport);