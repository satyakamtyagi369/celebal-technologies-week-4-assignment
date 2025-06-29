const express= require('express');
const information = express.Router();

information.get('/',(req,res)=>{
    res.send({ message: "This is the Information Page" });
})
information.post("/",(req,res)=>{
    res.send({message:"This page is used for post your information"});
})
information.put("/",(req,res)=>{
    res.send({message:"This is used for modify your particular data"});
})
information.patch("/",(req,res)=>{
    res.send({message:"This page is used for update the infrmation"});
})
information.delete("/",(req,res)=>{
    res.send({message:"if you want to delete this page, we used http delete method."});
})
module.exports=information;