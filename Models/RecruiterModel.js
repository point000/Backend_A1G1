const mongoose = require('mongoose')
const Schema  = mongoose.Schema;


const RecruiterShema= new mongoose.Schema ({

  Nom: {type : String , unique : true, required : true  },
  Prenom : {type: String },
  Email : {type: String },
  Pswd :{type: String },
  Type : {type: Number },
  NomEntreprise:{type :String},
  NumOffre : {type: Number,unique : true},
  Compte_verified:{type:Boolean}

}) ;

//creer un model
const RecruiterModel= mongoose.model('Recruiter', RecruiterShema);
module.exports =  RecruiterModel;
