import { useState } from "react"

export const Signup=()=>{

  let [name,setName]=useState("")
  let [password,setPassword]=useState("")
  let [email,setEmail]=useState("")
  let [mobile,setMobile]=useState("")

  let [nameError,setNameError]=useState("")
  let [passwordError,setPasswordError]=useState("")
  let [emailError,setemailError]=useState("")
  let [mobileError,setMobileError]=useState("")
 
  function handleSubmit(e){
     e.preventDefault()
    let isvalid=true
    if(name.length<=0){
      setNameError("Please Enter the valid username")
      isvalid=false
    }
    else{
      setNameError("")
    }
    if(password.length<=0){
      setPasswordError('Please Enter the valid password')
      isvalid=false
    }
    else{
      setPasswordError('')
    }
    if(email.length<=0){
      setemailError('please enter the valid username')
      isvalid=false
    }
    else{
      setemailError('')
    }
    if(mobile.length<=0){
      setMobileError('Please enter valid number')
      isvalid=false
    }
    else{
      setMobileError('')
    }
    if(isvalid){
      alert('Form data submitted successfully')
    }
  }
  return(
    <>
    <div className="container mt-3 ">
        <div className="row">
          <h1 className="mb-3">Signup</h1>
          <form action="">
            <div className="col-7">
              <label htmlFor="">Username</label>
              <input type="text" className="form-control" id="" onChange={(e)=>setName(e.target.value)}/>
              <p className="text-danger">{nameError}</p>
              </div>
              <div className="col-7">
              <label htmlFor="">Password</label>
              <input type="text" className="form-control" id="" onChange={(e)=>setPassword(e.target.value)}/>
              <p className="text-danger">{passwordError}</p>
              </div>
              <div className="col-7">
              <label htmlFor="">Email</label>
              <input type="text" className="form-control" id="" onChange={(e)=>setEmail(e.target.value)}/>
              <p className="text-danger">{emailError}</p>
              </div>
              <div className="col-7">
              <label htmlFor="">Mobile</label>
              <input type="text" className="form-control" id="" onChange={(e)=>setMobile(e.target.value)} />
              <p className="text-danger">{mobileError}</p>
              </div>
              <button className="btn btn-success mt-3" onClick={handleSubmit }>Submit</button>
          </form>

        </div>

    </div>
    <div className="card w-50 border-primary border border-4 p-5 m-5">
      <h4>Username:{name}</h4>
      <h4>Password:{password}</h4>
      <h4>Email:{email}</h4>
      <h4>Mobile:{mobile}</h4>

    </div>
    </>
  )
}