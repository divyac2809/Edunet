import React from 'react'

function New1(){
    function display(){
        alert("weclome to event in react")
    }
    
    return (
    <div>
    <button onClick={()=>{alert("Welcome")}}>Click me</button>
            </div>
     )
}

export default New1