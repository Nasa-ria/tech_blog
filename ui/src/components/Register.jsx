import {useState,useEffect} from "react"
import {connectUserApi,abortController} from "../lib/functions"

function Register(){
  const[user,setUser]=useState({
        username:"",
        password:"",
        name:"",
        Email:""
    })

      const handleChange=(event) =>{
		const value = event.target.value;
		    setUser({ ...user,[event.target.name]: value });

      
      }	

      const handleRegister =async(event)=>{
          try{
            event.preventDefault();
            const response = await connectUserApi("/register","POST",user) 
            // console.log(response)
            if(response.success){
                setUser(response.data)
                 alert(response.message)
    
            }else{
               alert( response.message)
               alert( response.status)
            }

          }catch(error){
           console.log("error from submitting a  login post",error)
          }
        }
    return(
    <>
    <div className="col-md-6 col-sm-12 col-lg-9">
      <div className="card shadow-sm mb-4">
      <form onSubmit={handleRegister}>
            <div class="row mb-3">
                <label htmlFor="name" className="col-sm-2 col-form-label">Full Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="name" onChange={(event) => handleChange(event)} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"  id="name" name="username" onChange={(event) => handleChange(event)} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" name="email" onChange={(event) => handleChange(event)} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control"  id="password" name="password" onChange={(event) => handleChange(event)} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="confirm_password" className="col-sm-2 col-form-label">Confirm Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control"  id="confirm_password" name="confirm_password" onChange={(event) => handleChange(event)} />
                </div>
            </div>
            {/* <div className="row mb-3"> */}
            <button type="submit"  className="btn btn-primary">Signup</button>
            {/* </div> */}
        </form>
        </div>
    </div>
    </>
    )
}
export default Register