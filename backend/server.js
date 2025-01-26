//nodemon will restart project internally
// console.log("one")
// console.log("two")


// const express=require('express')
// const app=express();

// const PORT=7788;

// app.get("/",(request,response)=>{
//     response.send("Welcome to express js get method")
// })
// app.get("/getName",(request,response)=>{
//     response.send("My College name is Vasantdada")
// })
// app.get("/getName/area",(request,response)=>{
//     response.send("Vasantdada from Mumbai");
// })

// app.listen(PORT,()=>{
//     console.log(`My Server is running on ${PORT} number`)
// })


const express=require('express')
const dotEnv=require('dotenv')
const mongoClient=require('mongoose')
const app=express();

const PORT=8899;
dotEnv.config();
mongoClient.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("we connected to MongoDB atlas account")
    }).catch((err)=>{
        console.log(err);
    })
app.listen(PORT,()=>{
    console.log(`My Server is running on ${PORT} number`)
})