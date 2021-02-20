const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ordonnance = new Schema({
  date  :{ type: Date, default: Date.now() },
  Medicin : { type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' },
  Patient : { type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' },
  Medicaments : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Medicament' }]
},{
  collection: 'ordonnance'
});

module.exports = mongoose.model('Ordonnance', Ordonnance);