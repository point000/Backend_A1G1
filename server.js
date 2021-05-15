
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')



const recuiter = require('./Routes/RecruiterRoute')
const jobseeker= require('./Routes/JobseekerRoute')

//Conncetion a la BDD Application
mongoose.connect('mongodb://localhost:27017/Application',{ useUnifiedTopology: true , useNewUrlParser: true }) ;
const db = mongoose.connection

db.once('open',function(){
  console.log('connection has been made');
}).on('error',function(error){
  console.log('error is :',error);
});

const app = express()

app.use(morgan('dev'))
//app.use(bodyParser.urlencoded({extended:true}))//tu sert a rien
app.use(express.json())

//port
app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)});

app.use('/api/JobseekerRoute',jobseeker )
app.use('/api/Recruiter',recuiter)
