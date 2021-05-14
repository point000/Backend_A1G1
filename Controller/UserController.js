
const UserModel = require('../Models/UserModel');

//show la liste des utilisateurs
//Affichage

const index= (req,res, next )=>{
const index = (req,res, next )=>{
  UserModel.find().then(response => {
    res.json({
      response
    })
  })
  .catch(error=>{
    res.json({
      message :'error occured in index '
    })
  })
}


// Affichage d'un seul user avec son // IDEA:

//Affichage
const Afficher= (req,res, next )=>{
let  UserID=req.body.UserID
  UserModel.findById(UserID)
  .then(response => {
    res.json({
      response
    })
  })
  .catch(error=>{
    res.json({
      message :'error occured in Afficher '
    })
  })
}


//Create a user
const Create= (req,res, next )=>{
let user = new UserModel ({

  Nom : req.body.Nom,
  Prenom : req.body.Prenom,
  Email : req.body.Email,
  Pswd : req.body.Pswd,
  Type : req.body.Type,
  NomEntreprise : req.body.NomEntreprise,
  NumOffre: req.body.NumOffre,
  Compte_verified:req.body.Compte_verified

})
user.save()
  .then(response => {
    res.json({
    message:'user aded success'
    })
  })
  .catch(error=>{
    res.json({
      message :'error occured in Create '
    })
  })
}


//Update

const Update= (req,res, next )=>{
let  UserID=req.body.UserID

let updateData ={
  Nom : req.body.Nom,
  Prenom : req.body.Prenom,
  Email : req.body.Email,
  Pswd : req.body.Pswd,
  Type : req.body.Type,
  NomEntreprise : req.body.NomEntreprise,
  NumOffre: req.body.NumOffre,
  Compte_verified:req.body.Compte_verified

}
  UserModel.findByIdAndUpdate(UserID,{$set:updateData})
  .then(response => {
    res.json({
      message :'update success in Update '

    })
  })
  .catch(error=>{
    res.json({
      message :'error occured in Update '
    })
  })
}


//Delete user
const Delete= (req,res, next )=>{
let  UserID=req.body.UserID
  UserModel.findOneAndRemove(UserID)
  .then(response => {
    res.json({
      message :'User Deleted success '

    })
  })
  .catch(error=>{
    res.json({
      message :'error occured in Delete '
    })
  })
}

module.exports = {
  index, Afficher , Create , Update ,Delete
}
