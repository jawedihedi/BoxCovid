var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const EtatPatient = require('./EtatPatient');
var UserSchema = new mongoose.Schema({
  id: String,
  email: {type:String ,unique: true},
  password: String,
  role: {
    type: String,
    enum: ['Medicin', 'Patient']
  },
  nom:String,
  prenom: String,
  resetToken: String,
  resetTokenExpiration: Date,
  tel: Number,
  age : { type: Number, default: 0 },
  Medicin : [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' }],
  EtatPatient : { type: mongoose.Schema.Types.ObjectId, ref: 'EtatPatient' }

},{
  collection: 'users'
});
UserSchema.plugin(uniqueValidator);

UserSchema.methods.toAuthJSON = function(){
  return {
      email: this.email,
      role: this.role,
      nom: this.nom,
      prenom: this.prenom
  };
};

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');

 