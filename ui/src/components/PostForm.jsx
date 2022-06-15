  import {useState,useEffect} from "react"
import {connectApi,abortController, connectApiToFetchImage} from "../lib/functions"
import { useParams } from "react-router-dom"

function PostForm(props){
    const[post,setPost]=useState({
        post_title:"",
        article:"",
        author:"",
        summary:"",
        image:""
       
      })
         

        //  const {id}=useParams()
        
      const   handleChange=(event) =>{
		const value = event.target.value;
		if(event.target.name === "image"){
			setPost({ ...post,[event.target.name]: event.target.files[0] });	
		
		}else{
		    setPost({ ...post,[event.target.name]: value });	
        }
		
	};
  const {id}=useParams()
  useEffect(()=>{
    const EditPost = async() =>{
      // try {
        if(id){
          const response = await connectApi("/posts/" +id) 
        setPost(response.data);
        }
      }
    
      EditPost()
        return()=>{
        if(abortController){
        abortController.abort() 
        }
      }
     },[])

 
  var action = props.action
      const handleSubmit = async(event) => {
         event.preventDefault();
         let response;
        //  var action = props.action
         switch(action){
           case"add":
            response =await connectApiToFetchImage("/posts","POST",post)
               if(response.success){
                 setPost({post_title:"",author:"",summary:"",article:"",image:""})
                 alert("Post has being created successfully")
               }else{
                 alert(response.message)
               }                           
       
           break;
           case"edit":
            response = await connectApiToFetchImage("/posts/"+ id,"PUT",post)
            // console.log(response)
               if(response.success){
                 alert("Post has being edited successfully")
               }else{
                 alert(response.message)
               } 
            break;
           }
         }
       
        
        //  const{post_title,summary,article,author}=post
    return(
        <>
         <div className="col-md-6 col-sm-12 col-lg-9">
       <div className="card shadow-sm mt-5">
                      <h5 className="text-center mt-5">Post </h5>
                        <form className="row g-3" style={{margin:"2em"}} onSubmit={handleSubmit} >
                             <div className="col-md-6">
            <label htmlFor="text" className="form-label">Author</label>
            <input type="text" className="form-control" id="author" name="author" value={post.author} onChange={(event)=>handleChange(event)}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="post_title" className="form-label">Title</label>
            <input type="text" className="form-control" id="post_title" name="post_title" value={post.post_title} onChange={(event)=>handleChange(event)}/>
            </div>

            <label htmlFor="article" className="form-label">article
            <textarea className="form-control" id="article" name="article" value={post.article} onChange={(event)=>handleChange(event)} ></textarea>
            </label>

            <label htmlFor="summary" className="form-label">summary of the article
            <textarea className="form-control" id="summary" name="summary" value={post.summary} onChange={(event)=>handleChange(event)} ></textarea>
            </label>


            <label htmlFor="image" className="form-label">Image
                  {/* {{ action :"add" ?(  */}
                      <input	onChange={(event)=>handleChange(event)} type="file" className="form-control"   	name="image" id="image" placeholder="image"  	/>
                  {/* // ):({image})   
                  // }} */}
                   </label>         
           	
          <div className="col-12">
            <button type="submit" className="btn btn-primary"  >Submit</button>
          </div>
      </form>
      </div>
      </div>
        </>
    )
}
export default PostForm