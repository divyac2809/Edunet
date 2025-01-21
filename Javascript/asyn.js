async function displayInfo() {
    x=await 10+20
    return x    
}
let result=displayInfo()//30
result.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})