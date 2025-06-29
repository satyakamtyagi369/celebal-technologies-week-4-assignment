const express= require("express");
const port = 3000;
const app = express();

const userroute=require("./routes/user");
const informationroute=require("./routes/information");
const middlewarepass= require("./middleware/middlewarepass");

app.use(express.json());
app.use('/user',userroute);
app.use('/information',middlewarepass,informationroute);

app.listen(port,()=>{
    console.log(`Server is listening on localhost:${port}`);
})