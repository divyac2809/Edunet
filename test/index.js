//os module, path module, file module,http module (built-in modules)
 
// const os=require('os')
// console.log(os.type())
// console.log(os.version())
// console.log(os.freemem())
// console.log(__dirname)
// console.log(__filename)
// console.log(os.cpus())


// const path=require('path')
// console.log(__dirname)
// console.log(path.dirname(__dirname))
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))


// const fs=require('fs')
// fs.readFile('one.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })


// const fs=require('fs')
// fs.writeFile('a.doc','Divya',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("file created and added text successfully")
// })


// const fs=require('fs')
// console.log("this is first")

// const result=fs.readFileSync("one.txt",'utf-8');
// // fs.readFile("one.txt",'utf-8',(err,result));
// console.log(result)
// console.log("this is my last console statement")



// const http=require('http')
// const myServer=http.createServer((request,response)=>{
//     response.write("backend app running successfully")
//     response.end()
// })

// myServer.listen(5500,()=>{
//     console.log("my server is running on port no 5500")
// })



// const http=require('http')
// const PORT=7788;
// const mySerevr=http.createServer((request,response)=>{
//     response.write("Backend application running successfully");
//     response.write("One more statement from nodejs")
//     response.end();
// })
// mySerevr.listen(PORT,()=>{
//     console.log(My server is running on ${PORT} number);
// })


// let {Addition, Multiplication}=require("./Add")
// console.log(Addition(2,3));
// console.log(Multiplication(10,20));


