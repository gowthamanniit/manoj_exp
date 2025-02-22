//delete dynamic
var app=require("express")()
app.get("/delfun",(req,bres)=>{
    var usr=req.query["un"]
    var jsonqry={
        name:usr.toLowerCase()
        }
    const { MongoClient } = require("mongodb")
    const client=new MongoClient("mongodb://127.0.0.1:27017/")
    client.connect()
    console.log("connection success")
    try
    {
    const dataset=client.db("student").collection("details").deleteMany(jsonqry)
    dataset.then((cres)=>{
        console.log(cres)
        if (cres.deletedCount>0)
        bres.send(cres.deletedCount+" records successfully deleted")      
        else
        bres.send("<h1>No records Found in db")
       })
    }
    catch{
        console.log("error")
        client.close() //connection cut
    }


}).listen(9992)
console.log("port listening at 9992.......")