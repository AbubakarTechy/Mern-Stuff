const express= require("express");
const app= express();
const port=7000;

//Middleware
app.use(function(req,res,next){
    console.log("Middleware hun");
    next();
})

app.use(function(req,res,next){
    console.log("Middleware phirrrrrrrr se hun");
    next();
})

//Routing
app.get("/", (req,res)=>{
    res.send("Heloooooooo");
})

app.get("/profile", (req, res)=>{
    res.send("Prooooooofile");
})

app.listen(port, ()=>{
    console.log(`server is running on https:${port}`);

})