
const JobseekerModel = require('../Models/JobseekerModel');

// Affichage des Joobseekers
//show Joobseekers

const index = (req,res, next )=>{
  JobseekerModel.find().then(response => {
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


// Affichage d'un seul user avec son ID  //

//show Joobseekers
const Afficher= (req,res, next )=>{
let JobseekerID=req.body.JobseekerID
  JobseekerModel.findById(JobseekerID)
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


//Create a Joobseeker
const Create= (req,res, next )=>{
let user = new JobseekerModel ({

  Nom : req.body.Nom,
  Prenom : req.body.Prenom,
  Email : req.body.Email,
  Pswd : req.body.Pswd,
  Type : req.body.Type,
  Compte_verified:req.body.Compte_verified

})
user.save()
  .then(response => {
    res.json({
    message:'Jobseeker Aded with sucess'
    })
  })
  .catch(error=>{
    res.json({
      message :'error occured at Create '
    })
  })
}


//Update Joobseeker

const Update= (req,res, next )=>{
let  JobseekerID=req.body.JobseekerID

let updateData ={
  Nom : req.body.Nom,
  Prenom : req.body.Prenom,
  Email : req.body.Email,
  Pswd : req.body.Pswd,
  Type : req.body.Type,
  Compte_verified:req.body.Compte_verified

}
  JobseekerModel.findByIdAndUpdate(JobseekerID,{$set:updateData})
  .then(response => {
    res.json({
      message :'Jobseeker Updated with Sucess'

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
let  JobseekerID=req.body.JobseekerID
  JobseekerModel.findOneAndRemove(JobseekerID)
  .then(response => {
    res.json({
      message :'Jobseeker Deleted with Sucess '

    })
  })
  .catch(error=>{
    res.json({
      message :'error occured at Delete '
    })
  })
}

module.exports = {
  index, Afficher , Create , Update ,Delete
}
