const fs = require('fs');
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://admin123:admin123@ds133630.mlab.com:33630/carspadb");

let app=express();
/*
let archSchema=new mongoose.Schema({
  name:String,
  exp:Number,
  price:Number
  });
let archModel=mongoose.model("arch",archSchema);
*/

let feedbackSchema=new mongoose.Schema({
  name:String,
  email:String,
  comment:String
});
let feedbackModel=mongoose.model("feedback",feedbackSchema);







// archModel({
//   "name":"ARamu",
//   "exp":14,
//   "price":50000
// }).save();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/*
app.get("/",function(req,res){
    //res.writeHead(200,{"Content-Type":"application/json"});
    archModel.find({},function(err,data){
      if(err) throw err;
      res.json(data);
    })
  });


app.get("/about",function(req,res){
      res.writeHead(200,{"Content-Type":"text/html"});
       fs.createReadStream(__dirname+"/about.html").pipe(res);
    });
*/


app.post("/feedback",function(req,res){
  console.log(req.body);
feedbackModel(req.body).save(function(err,data){
  if(err) throw err;
  res.json({"message":"Thank you. Feedback Sent!"});
});

});

/*
    app.get("/contact",function(req,res){
        res.writeHead(200,{"Content-Type":"text/html"});
         fs.createReadStream(__dirname+"/contact.html").pipe(res);
      });
*/

app.listen(3000);







//const app = require('./app');
//app();
//
// let server=http.createServer(function(req,res){
//
//   fs.createReadStream(__dirname+"/index.html").pipe(res);
//
// });
//
// server.listen(3000);

//var op=fs.createWriteStream("op.txt");


// let data=fs.readFile("data.txt","utf8",function(err,data){
//   console.log(data);
// });
console.log("few lines of code");
console.log("few lines of code");
console.log("few lines of code");
