const fs = require('fs');
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const sgMail = require('@sendgrid/mail');

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

let signupSchema=new mongoose.Schema({
  name:String,
  vname:String,
  vid:String,

  email:String,
  addr:String,
  city:String,
  state:String,
  zip:String
});

let signupModel=mongoose.model("signup",signupSchema);


/*
let feedbackSchema=new mongoose.Schema({
  name:String,
  email:String,
  comment:String
});

let feedbackModel=mongoose.model("feedback",feedbackSchema)
*/
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//mail
app.post("/signup",function(req,res){
    console.log(req.body.email);
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            const msg = {
              to: req.body.email,
              from: 'darnesh.p.thejas@gmail.com',
              subject: 'CAR SPA service mail',
              text: 'Your vehicle after servicing will be delivered on 10th AUG 2018.',
              html:  '<h1>Your Bill!!!!</h1><table border=1><tr><td>Vehicle ID</td><td>ServiceType</td><td>Charges</td><td>Labour Charges</td><td>Total Charges</td></tr><tr><td>KA00AA1143</td><td>BOdy_wash+Polishing</td><td>Rs.12000/-</td><td>Rs.8000</td><td>Rs.20000/-</td></tr></table>',
            };
            sgMail.send(msg);
            signupModel(req.body).save(function(err,data){
              if(err) throw err;
            // res.json({"message":"Booking Successful!. Check your mail..!"});
            res.json({"message":"Booking Successful. Check your mail..!"});
            });

});

//
// app.post("/signup",function(req,res){
//   console.log(req.body);
// });

/*
//getting feedbacks

app.get("/getfeedbacks",function(req,res){
  feedbackModel.find({},function(err,data){
    res.json(data);
  });
});

*/
app.listen(3000);









// archModel({
//   "name":"ARamu",
//   "exp":14,
//   "price":50000
// }).save();




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




/*
    app.get("/contact",function(req,res){
        res.writeHead(200,{"Content-Type":"text/html"});
         fs.createReadStream(__dirname+"/contact.html").pipe(res);
      });
*/









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
console.log("signup");
console.log("signup");
console.log("signup");
