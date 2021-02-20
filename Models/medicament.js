const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Medicament = new Schema({
  name  : {
     type : String
   },
  duree : {
    type: String
   },
  quantite : {
   type: String
  }
},{
  collection: 'medicament'
});

module.exports = mongoose.model('Medicament', Medicament);