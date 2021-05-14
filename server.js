
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser');

const userRoute = require('./Routes/UserRoutes')


mongoose.connect('mongodb://localhost:27017/Application',{ useUnifiedTopology: true , useNewUrlParser: true }) ;
const db = mongoose.connection

db.once('open',function(){
  console.log('connection has been made');
}).on('error',function(error){
  console.log('error is :',error);
});

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//port
app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)});

app.use('/api/UserRoutes',userRoute ) ;
