//var exp=require("express")
//var app=exp()
var app=require("express")()
var bodyParser=require("body-parser")
var urlEncoder=bodyParser.urlencoded({extended:false})

app.post("/postfun",urlEncoder,(req,res)=>{
    var un=req.body.un
    var pw=req.body.pw
    res.send("user Name:"+un+"<br>password:"+pw)

}).listen(9875)
console.log("port listending at 9875 .......")