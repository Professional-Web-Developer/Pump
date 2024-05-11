const express=require("express");
const app=express()
try{app.get("/",(req,res)=>{
    res.send("hello world");
})}
catch(err){
    throw new Error(err);
}
app.listen(5000,()=>{
    console.log("server is running on port 5000");
})