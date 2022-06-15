import Comment from "./Comment"
import { useEffect, useState,useContext } from "react"
import { connectApi,abortController} from "../lib/functions"
import { PostContext } from "./context/PostContext"
import { useParams } from "react-router-dom"


function CommentList(props){
  let post = useContext(PostContext)
  const[comments,setComments]=useState([])
 
  // const{_id:id}=props.post
// console.log(props.post)
    const{id}=useParams()
  useEffect(()=>{  
    const getComment = async() =>{
      // /fetch posts from back end
      const response =await connectApi("/posts/"+id+"/comments","GET")
      // console.log(response)
      // set posts
      setComments(response.data);
      
    }
     getComment()
     return()=>{
       if(abortController){
       abortController.abort() 
       }
     }
     },[id])

   
    return(
    <>
    
            <div className="card shadow-sm mt-5"> 
            <h1 className="text-center mt-3">Comments</h1>              
                { comments.map((comment)=>(  
             <Comment key={comment._id} comment={comment}/> )) 
                     } 
                  </div>
                  
    </>
    )
}
export default CommentList
