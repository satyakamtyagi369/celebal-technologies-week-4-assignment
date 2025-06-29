function middlewarepass(req,res,next){
    console.log("Here we just showcase, How middleware works");
    const {name,password}=req.query;
    if(name==="ramlal"&& password==="369369"){
        next();
    }
    else{
        res.send({data:"middleware not working properly."});
    }
}
module.exports=middlewarepass;