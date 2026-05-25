import { useState } from "react"

export const Home=()=>{

    let[count,setCount]=useState(0)

    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }
    function set(){
        setCount(0)
    }
    return(
        <>
        <center>
            <h1>Counter Application</h1>
            <h1>Count Value:{count}</h1>
            {/* <button className="btn btn-primary m-4" onClick={()=>setCount(count+1)}>Increment</button>
            <button className="btn btn-danger m-4" onClick={()=>setCount(count-1)} >Decrement</button>
            <button className="btn btn-warning m-4" onClick={()=>setCount(count=0)}>Reset</button> */}
            <button className="btn btn-primary m-4" onClick={Increment}>Increment</button>
            <button className="btn btn-danger m-4" onClick={Decrement} >Decrement</button>
            <button className="btn btn-warning m-4" onClick={set}>Reset</button>
        </center>
        </>
    )
}