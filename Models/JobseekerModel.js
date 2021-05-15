const mongoose = require('mongoose')
const Schema  = mongoose.Schema;


const JobseekerShema= new mongoose.Schema ({

  Nom: {type : String ,unique : true, required : true},
  Prenom : {type: String },
  Email : {type: String },
  Pswd :{type: String },
  Type : {type: Number },
  Compte_verified:{type:Boolean}

}) ;

//creer un model
const JobseekerModel= mongoose.model('Jobseekers',JobseekerShema);
module.exports =  JobseekerModel;
