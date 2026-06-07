import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Signup = () => {

const navigate = useNavigate()

  let [formData,setFormData]=useState({
    name:"",
    password:"",
    email:"",
    mobile:""
  })
let [errors,setErrors]=useState({
  nameError:"",
  passwordError:"",
  emailError:"",
  mobileError:""
})
function handleChange(e){
  let {name,value}=e.target
  setFormData(prev=>({...prev,[name]:value}))
}
let namePattern=/^[A-Z][a-z]{7,}$/;
// /^[A-Z][a-z][7,]$/
let passwordPattern=/^[A-Z][a-z]{7,}$/;
let emailPattern=/^[A-Z][a-z]{7,}$/;
let mobilePattern=/^[A-Z][a-z]{7,}$/;

function handleSubmit(e){
  e.preventDefault()
  let isvalid=true
  
  let newErrors={
    nameError:"",
    passwordError:"",
    emailError:"",
    mobileError:""
  }
  let{name,password,email,mobile}=formData

  if(!namePattern.test(name)){
    newErrors.nameError="Please Enter valid username"
    isvalid=false
  }
  if(!passwordPattern.test(password)){
    newErrors.passwordError="Please Enter valid username"
    isvalid=false
  }
  if(!emailPattern.test(email)){
    newErrors.emailError="Please Enter valid username"
    isvalid=false
  }
  if(!mobilePattern.test(mobile)){
    newErrors.mobileError="Please Enter valid username"
    isvalid=false
  }
  setErrors(newErrors)

  if(isvalid){
    alert("Successfully Submitted")
    navigate("/home")
  }

}


  return (
    <>
      <div className="container mt-3 ">
        <div className="row">
          <h1 className="mb-3">Signup</h1>
          <form action="">
            <div className="col-7">
              <label htmlFor="">Username</label>
              <input type="text" className="form-control" id="" name="name" value={formData.name} onChange={handleChange}/>
              <p className="text-danger">{errors.nameError}</p>
            </div>
            <div className="col-7">
              <label htmlFor="">Password</label>
              <input type="text" className="form-control" id="" name="password" value={formData.password} onChange={handleChange}/>
              <p className="text-danger">{errors.passwordError}</p>
            </div>
            <div className="col-7">
              <label htmlFor="">Email</label>
              <input type="text" className="form-control" id="" name="email" value={formData.email} onChange={handleChange}/>
              <p className="text-danger">{errors.emailError}</p>
            </div>
            <div className="col-7">
              <label htmlFor="">Mobile</label>
              <input type="text" className="form-control" id="" name="mobile" value={formData.mobile} onChange={handleChange}/>
              <p className="text-danger">{errors.mobileError}</p>
            </div>
            <button className="btn btn-success mt-3" onClick={handleSubmit}>Submit</button>
          </form>

        </div>

      </div>
    </>
  )
}