// adding libraries
const express = require("express");
const expressSession = require("express-session");
const path = require("path");
const mongoose = require("mongoose");

//making port
const port = 3000

//marking constant
const app = express();

//paths
const regis1 = path.join(__dirname,"1/1.html")
const regis2 = path.join(__dirname,"2/2.html")
const regis3 = path.join(__dirname,"3/3.html")
const regis4 = path.join(__dirname,"4/4.html")
const regis5 = path.join(__dirname,"5/5.html")

app.use(express.static(path.join(__dirname,"/1")))
app.use(express.static(path.join(__dirname,"/2")))
app.use(express.static(path.join(__dirname,"/3")))
app.use(express.static(path.join(__dirname,"/4")))
app.use(express.static(path.join(__dirname,"/5")))

//Calling Routes
app.get("/",(req,res)=>{
    res.sendFile(regis1)
})

app.get("/2",(req,res)=>{
    res.sendFile(regis2)
})

app.get("/3",(req,res)=>{
    res.sendFile(regis3)
})

app.get("/4",(req,res)=>{
    res.sendFile(regis4)
})

app.get("/5",(req,res)=>{
    res.sendFile(regis5)
})


//listening on port 3000
app.listen(port,()=>{
    console.log(`Listening on port no. ${port}`)
})