var express=require("express")
var app=express()

app.get("/mfun",(req,res)=>{

var user=req.query["un"]
var pass=req.query["pw"]
res.send(user+"  "+pass)

}).listen(1235)

console.log("port listening at 1235.........")
