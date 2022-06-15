import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { connectApi } from "../lib/functions"

function CommentForm(props){
  const[comment,setComment]=useState({
    author:"",
    text:""
  })
   const{id}=useParams()
 const  handleChange=(event)=>{
		const value = event.target.value;
		setComment({ ...comment, [event.target.name]: value });
   
	};
  const  handleSubmit = async(event) => {
    event.preventDefault();
     const response = await connectApi("/posts/"+id+"/comments","POST",comment)
    if(response.success){
      alert("task is save")
    }else{
      alert(response.message)
    }
  }
    return(
        <>
         <div className="card shadow-sm mt-5">
                      <h5 className="text-center mt-5">Share Your Thoughts</h5>
                   
                        <form className="row g-3" onSubmit={handleSubmit} style={{margin:"2em"}}>
          <div className="col-md-6">
            <label htmlFor="author" className="form-label">Name</label>
            <input type="text" className="form-control" id="author" name="author"  onChange={(event)=>handleChange(event)}/>
          </div>
          <label htmlFor="text" className="form-label">Comment
          <textarea className="form-control" id="text" name="text" onChange={(event)=>handleChange(event)} placeholder="enter your comment" ></textarea>
          </label>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
      </form>
      </div>
        </>
    )
}
export default CommentForm