import { useState } from "react";
import { Login } from "../Features/Authentication/Login"
import { Signup } from "../Features/Authentication/Signup"

export const Contact=()=>{
     let [page,setpage]=useState(true)
  
    return(
        <>
        <center>
        <button className="btn btn-primary m-2 mt-3" onClick={()=>setpage(true)}>Signup</button>
         <button className="btn btn-warning m-2 mt-3" onClick={()=>setpage(false)}>Login</button>
        </center>
        {page?<Signup/>:<Login/>}
        </>
    )
}