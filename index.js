const fs = require('fs');
const http = require('http');

const express = require('express');

let app=express();


app.get("/",function(req,res){
    res.writeHead(200,{"Content-Type":"application/json"});
     fs.createReadStream(__dirname+"/model/data.json").pipe(res);
  });

app.get("/about",function(req,res){
      res.writeHead(200,{"Content-Type":"text/html"});
       fs.createReadStream(__dirname+"/about.html").pipe(res);
    });
    app.get("/contact",function(req,res){
        res.writeHead(200,{"Content-Type":"text/html"});
         fs.createReadStream(__dirname+"/contact.html").pipe(res);
      });


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
