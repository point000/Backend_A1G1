const mongoose = require('mongoose')
const Schema  = mongoose.Schema;


const UtilisateursShema= new mongoose.Schema ({

  Nom: {type : String },
  Prenom : {type: String },
  Email : {type: String },
  Pswd :{type: String },
  Type : {type: Number },
  NomEntreprise:{type :String},
  NumOffre : {type: Number},
  Compte_verified:{type:Boolean}

}) ;

//creer un model
const UserModel= mongoose.model('utilisateurs', UtilisateursShema);
module.exports =  UserModel;
