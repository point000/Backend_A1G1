
const RecuiterModel = require('../Models/RecruiterModel')

//show la liste des utilisateurs
//Affichage

const index = (req,res, next )=>{
  RecuiterModel.find().then(response => {
    res.json({
      response
    })
  })
  .catch(error=>{
    res.json({
      message :'error occured at index '
    })
  })
}


// Affichage d'un seul user avec son // IDEA:

//Affichage
const Afficher= (req,res, next )=>{
let  RecuiterID=req.params.RecuiterID
  RecuiterModel.findById(RecuiterID)
  .then(response => {
    res.json({
      response
    })
  })
  .catch(error=>{
    res.json({
      message :'error occured at Afficher '
    })
  })
}


//Create a user
const Create= (req,res, next )=>{
let user = new RecuiterModel ({

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
    message:'Recuiter Aded with sucess'
    })
  })
  .catch(error=>{
    res.json({
      message :'error occured at Create '
    })
  })
}


//Update

const Update= (req,res, next )=>{
let  RecuiterID= req.params.RecuiterID

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
  RecuiterModel.findByIdAndUpdate(RecuiterID,{$set:updateData})
  .then(response => {
    res.json({
      message :'Recuiter Updated with sucess '

    })
  })
  .catch(error=>{
    res.json({
      message :'error occured at Update '
    })
  })
}


//Delete user
const Delete= (req,res, next )=>{
let  RecuiterID=req.params.RecuiterID
RecuiterModel.findByIdAndRemove(RecuiterID)
  .then(response => {
    res.json({
      message :'Recuiter Deleted with success '

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
