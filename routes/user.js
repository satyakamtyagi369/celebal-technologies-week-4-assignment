const express= require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send({ message: "This is the User Page" });
})
router.post("/",(req,res)=>{
    res.send({message:"This page is used for post your details"});
})
router.put("/",(req,res)=>{
    res.send({message:"This is used for modify your particular data"});
})
router.patch("/",(req,res)=>{
    res.send({message:"This page is used for update the data."});
})
router.delete("/",(req,res)=>{
    res.send({message:"if you want to delete this page, we used http delete method."});
})
module.exports=router;