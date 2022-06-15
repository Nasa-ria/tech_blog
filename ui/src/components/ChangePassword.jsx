import {useState,useEffect} from "react"
import {connectUserApi} from "../lib/functions"

function ChangePassword(){
    const[user,setUser]=useState({
        password:""
    })

    const handleChange=(event) =>{
		const value = event.target.value;
		    setUser({ ...user,[event.target.name]: value });
      }	

     const handleSubmit =async(event)=>{
        try{
          event.preventDefault();
          const response = await connectUserApi("/change-password","POST",user)
          if(response.success){
            setUser(response.data)
            alert("password-change successfully")
          }else{
            console.log("error",response.message)
          }

        }catch(error){
         console.log("error from  hanging password")
        }
    }

    return(
        <>
         <div className="col-md-6 col-sm-12 col-lg-9">
        <div className="card shadow-sm mb-4">
          <form className="text-center" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal mt-4">Change password</h1>
                <div className="col-md-6" style={{marginLeft:"12em" ,marginButtom:"2em"}}>
                  <input type="text" className="form-control"   name="current_password" onChange={(event)=>handleChange(event)} placeholder="enter your current password"/>
                </div><br/>
                <div className="col-md-6" style={{marginLeft:"12em"}}>
                  <input type="text" className="form-control" name="new_password" onChange={(event)=>handleChange(event)} placeholder="put in your new password"/>
                </div><br/>
                <div className="col-md-6" style={{marginLeft:"12em"}}>
                  <input type="text" className="form-control" name="confirm_password" onChange={(event)=>handleChange(event)} placeholder="confirm new password"/>
                </div><br/>
                <button className="btn btn-lg btn-primary" type="submit">Submit</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
         </form>
                </div>
                </div>

        </>
    )
}
export default ChangePassword