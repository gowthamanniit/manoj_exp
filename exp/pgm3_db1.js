var app=require("express")()
var bp=require("body-parser")
var {MongoClient}=require("mongodb")
//const uri="mongodb://127.0.0.1:27017/"

var urlencoder=bp.urlencoded({extended:false})
app.post("/insertfun",urlencoder,(req,res)=>{
var un=req.body.un
var pw=req.body.pw
var resjson={
    user:un,
    pass:pw
    }
    const client=new MongoClient("mongodb://127.0.0.1:27017/")
    client.connect()
    console.log("connection success")
    
    try
    {
const dataset=client.db("student").collection("details").insertOne(resjson)
dataset.then((result)=>{
    console.log("answer success :",result)
    res.send("inserted success"+result)
})
    }
    catch{
        console.log("error")
        client.close()
    }


}).listen(9991)
console.log("port listending at 9991 .....")