import {useState,useContext} from "react"
import {Link, Navigate} from 'react-router-dom'
import {connectUserApi} from "../lib/functions"
import {AuthContext} from "./context/AuthContext"

function LoginForm(){
  const {setAuth} = useContext(AuthContext)
    const[user,setUser]=useState({username:"",password:"",accessToken:""})
 

      const handleChange=(event) =>{
		const value = event.target.value;
		    setUser({ ...user,[event.target.name]: value });
      }	
      const handleLogin =async(event)=>{
        try{
          event.preventDefault();
          const response = await connectUserApi("/login","POST",user)
          if(response.success){
            setAuth(response.data)
            setUser({username:"",password:""})
            alert("Sign successfully")
            // Navigate('/blog/post')
          }else{
            console.log("error",response.message)
          }
    
        }catch(error){
         console.log("error from submitting a  login post")
        }
    }

    return(
    <>
    <div className="col-md-6 col-sm-12 col-lg-9">
        <div className="card shadow-sm mb-4">
          <form className="text-center" onSubmit={handleLogin} >
                <h1 className="h3 mb-3 fw-normal mt-4">Sign In</h1>
                <div className="col-md-6" style={{marginLeft:"12em" ,marginButtom:"2em"}}>
                  <input type="text" className="form-control"   name="username" onChange={(event)=>handleChange(event)} placeholder="enter your username"/>
                </div><br/>
                <div className="col-md-6" style={{marginLeft:"12em"}}>
                  <input type="text" className="form-control" name="password" onChange={(event)=>handleChange(event)} placeholder="put in your password"/>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                  </label>
                  <Link to={"/blog/change_password"}>change password</Link>
                </div>
                <button className="btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
          <Link to='blog/posts'>post</Link>
        </div>
     </div>
    </>
    )
}
export  default LoginForm