// delete operation static
const { MongoClient } = require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017/")
client.connect()
console.log("connection success")
try
{
const dataset=client.db("student").collection("details").deleteOne({user:"kumar"})
dataset.then((res)=>{
    console.log(res)
})
}
catch{
    console.log("error")
}