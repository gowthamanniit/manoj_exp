// Find sataic one(findOne) or many(find)
//dynamic task21
var {MongoClient} = require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017/")
client.connect()
console.log("connection success")
try
{
const dataset=client.db("student").collection("details").find({mark:{$gt:60}}).toArray()
dataset.then((cres)=>{
console.log(cres)
})
}
catch
{
    console.log("error")
}

